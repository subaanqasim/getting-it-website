import React from "react"
import { BlogPostJsonLd, GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        siteName
        description
        title
      }
    }
    subaan: contentfulAuthor(name: { eq: "Subaan Qasim" }) {
      name
      linkedIn
    }
    dan: contentfulAuthor(name: { eq: "Daniel Redfearn" }) {
      name
      linkedIn
    }
    contentfulAsset(
      title: { eq: "Getting It Logo" }
      mimeType: { eq: "image/png" }
    ) {
      url
    }
  }
`

export default function PodcastSeo({ epData }) {
  const {
    episodeTitle,
    isoDate,
    thumbnail,
    slug,
    excerpt,
    updatedAt,
    keywords,
  } = epData

  const { site, subaan, dan, contentfulAsset } = useStaticQuery(query)

  return (
    <>
      <GatsbySeo
        title={episodeTitle || site.siteMetadata.title}
        description={excerpt || site.siteMetadata.description}
        canonical={`${site.siteMetadata.siteUrl}/episodes/${slug}`}
        openGraph={{
          title: episodeTitle || site.siteMetadata.title,
          description: excerpt || site.siteMetadata.description,
          url: `${site.siteMetadata.siteUrl}/episodes/${slug}`,
          type: "article",
          article: {
            publishedTime: isoDate,
            modifiedTime: updatedAt,
            authors: [subaan.linkedIn, dan.linkedIn],
            tags: keywords || [
              "getting it",
              "podcast",
              "learning",
              "education",
            ],
          },
          images: [
            {
              url: thumbnail.url,
              width: thumbnail.width,
              height: thumbnail.height,
              alt: thumbnail.title,
            },
          ],
        }}
      />

      <BlogPostJsonLd
        url={`${site.siteMetadata.siteUrl}/episodes/${slug}`}
        title={episodeTitle}
        images={[thumbnail.url]}
        datePublished={isoDate}
        dateModified={updatedAt}
        description={excerpt}
        publisherName={site.siteMetadata.siteName}
        publisherLogo={contentfulAsset.url}
        overrides={{
          author: [
            {
              "@type": "Person",
              name: subaan.name,
              url: subaan.linkedIn,
            },
            {
              "@type": "Person",
              name: dan.name,
              url: dan.linkedIn,
            },
          ],
          keywords: keywords
            ? keywords.join(",")
            : "getting it,podcast,learning,education",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: "1",
                item: {
                  "@id": `${site.siteMetadata.siteUrl}/episodes`,
                  name: "Episodes",
                },
              },
            ],
          },
        }}
      />
    </>
  )
}
