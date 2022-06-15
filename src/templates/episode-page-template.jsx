import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container } from "@mantine/core"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import EpisodePageHeader from "../components/EpisodePage/EpisodePageHeader/EpisodePageHeader"
import MdxProvider from "../components/EpisodePage/Mdx/MdxProvider"
import EpisodeSiblings from "../components/EpisodePage/EpisodeSiblings/EpisodeSiblings"
import PodcastSeo from "../components/Seo/PodcastSeo"
import PodcastLinksModal from "../components/PodcastLinksGrid/PodcastLinksModal"

export default function EpisodePageTemplate({ data }) {
  const { current, next, previous } = data
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <PodcastSeo epData={current} />
      <EpisodePageHeader epData={current} />
      <main>
        <Container size="sm">
          <PodcastLinksModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />

          <EpisodeSiblings next={next} previous={previous} />

          <MdxProvider>
            <MDXRenderer>{current.notes.childMdx.body}</MDXRenderer>
          </MdxProvider>
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
