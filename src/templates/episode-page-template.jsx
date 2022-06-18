import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container } from "@mantine/core"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import EpisodePageHeader from "../components/EpisodePage/EpisodePageHeader/EpisodePageHeader"
import MdxProvider from "../components/EpisodePage/Mdx/MdxProvider"
import EpisodeSiblings from "../components/EpisodePage/EpisodeSiblings/EpisodeSiblings"
import PodcastSeo from "../components/Seo/PodcastSeo"
import PodcastLinksModal from "../components/PodcastLinksGrid/PodcastLinksModal"
import TableOfContents from "../components/EpisodePage/TableOfContents/TableOfContents"
import { useMediaQuery } from "@mantine/hooks"

export default function EpisodePageTemplate({ data, location }) {
  const { current, next, previous } = data
  const [modalOpen, setModalOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <>
      <PodcastSeo epData={current} />
      <EpisodePageHeader epData={current} />
      <main>
        <Container
          size="xl"
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              maxWidth: "650px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <PodcastLinksModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />

            <EpisodeSiblings next={next} previous={previous} />

            <MdxProvider>
              <MDXRenderer>{current.notes.childMdx.body}</MDXRenderer>
              {current.transcript1 && (
                <MDXRenderer>{current.transcript1.childMdx.body}</MDXRenderer>
              )}
              {current.transcript2 && (
                <MDXRenderer>{current.transcript2.childMdx.body}</MDXRenderer>
              )}
              {current.transcript3 && (
                <MDXRenderer>{current.transcript3.childMdx.body}</MDXRenderer>
              )}
            </MdxProvider>
          </div>

          {!isMobile && (
            <div
              style={{
                flex: `0 0 300px`,
              }}
            >
              <TableOfContents
                location={location}
                notesHeadings={current.notes.childMdx.headings}
                transcript={current.transcript1 ? true : false}
              />
            </div>
          )}
        </Container>
      </main>
    </>
  )
}

export const query = graphql`
  query getEpisodeData($id: String, $nextEpId: String, $prevEpId: String) {
    current: contentfulPodcasts(id: { eq: $id }) {
      episodeTitle
      episodeNumber
      duration
      stringDate: datePublished(formatString: "MMM DD, YYYY")
      isoDate: datePublished(formatString: "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      updatedAt
      audioEmbedLink
      slug
      excerpt
      keywords
      thumbnail {
        title
        width
        height
        url
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
      metadata {
        tags {
          name
        }
      }
      notes {
        childMdx {
          body
          headings {
            value
            depth
          }
        }
      }
      transcript1 {
        childMdx {
          body
        }
      }
      transcript2 {
        childMdx {
          body
        }
      }
      transcript3 {
        childMdx {
          body
        }
      }
    }
    next: contentfulPodcasts(id: { eq: $nextEpId }) {
      episodeTitle
      episodeNumber
      datePublished(formatString: "MMM DD, YYYY")
      slug
    }
    previous: contentfulPodcasts(id: { eq: $prevEpId }) {
      episodeTitle
      episodeNumber
      datePublished(formatString: "MMM DD, YYYY")
      slug
    }
  }
`
