import React, { useState } from "react"
import { graphql } from "gatsby"
import { Button, Container, Modal } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import EpisodePageHeader from "../components/EpisodePage/EpisodePageHeader/EpisodePageHeader"
import MdxProvider from "../components/EpisodePage/Mdx/MdxProvider"
import PodcastLinksGrid from "../components/PodcastLinksGrid/PodcastLinksGrid"
import EpisodeSiblings from "../components/EpisodePage/EpisodeSiblings/EpisodeSiblings"
import PodcastSeo from "../components/seo/PodcastSeo"

export default function EpisodePageTemplate({ data }) {
  const { current, next, previous } = data
  const smallScreen = useMediaQuery("(max-width: 576px)")
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <PodcastSeo epData={current} />
      <EpisodePageHeader epData={current} />
      <Container size="sm">
        <Modal
          centered
          padding="md"
          opened={modalOpen}
          overflow="inside"
          onClose={() => setModalOpen(false)}
          title="Choose wisely..."
        >
          <PodcastLinksGrid />
        </Modal>

        {!smallScreen && <PodcastLinksGrid />}

        {smallScreen && (
          <Button
            fullWidth
            size="md"
            mb="xl"
            onClick={() => setModalOpen(true)}
            variant="gradient"
            gradient={{ from: "blue", to: "giBlue", deg: 60 }}
            color="giBlue"
          >
            Choose podcast platform
          </Button>
        )}

        <EpisodeSiblings next={next} previous={previous} />

        <MdxProvider>
          <MDXRenderer>{current.notes.childMdx.body}</MDXRenderer>
        </MdxProvider>
      </Container>
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
