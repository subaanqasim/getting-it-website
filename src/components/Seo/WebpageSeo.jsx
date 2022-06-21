import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
    contentfulAsset(
      title: { eq: "Getting It Logo" }
      mimeType: { eq: "image/png" }
    ) {
      title
      url
      width
      height
    }
  }
`

export default function WebpageSeo({
  title,
  description,
  linkTags,
  nofollow = false,
  noindex = false,
  slug,
}) {
  const { site, contentfulAsset } = useStaticQuery(query)

  return (
    <GatsbySeo
      title={title || site.siteMetadata.title}
      description={description || site.siteMetadata.description}
      linkTags={linkTags}
      nofollow={nofollow}
      noindex={noindex}
      openGraph={{
        title: title || site.siteMetadata.title,
        description: description || site.siteMetadata.description,
        type: "website",
        url: `${site.siteMetadata.siteUrl}/${slug}`,
        images: [
          {
            url: contentfulAsset.url,
            width: contentfulAsset.width,
            height: contentfulAsset.height,
            alt: contentfulAsset.title,
          },
        ],
      }}
    />
  )
}
