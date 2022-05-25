import React, { useState } from "react"
import { graphql } from "gatsby"
import { Button, Container, Modal } from "@mantine/core"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "../components/global/Layout"
import EpisodePageHeader from "../components/EpisodePage/EpisodePageHeader"
import MdxProvider from "../components/EpisodePage/Mdx/MdxProvider"
import PodcastLinksGrid from "../components/PodcastLinksGrid"
import { useMediaQuery } from "@mantine/hooks"

export default function EpisodePageTemplate({ data }) {
  const { current, next, previous } = data
  const smallScreen = useMediaQuery("(max-width: 576px)")
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Layout>
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

        <MdxProvider>
          <MDXRenderer>{current.notes.childMdx.body}</MDXRenderer>
        </MdxProvider>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query getEpisodeData($id: String, $nextEpId: String, $prevEpId: String) {
    current: contentfulPodcasts(id: { eq: $id }) {
      episodeTitle
      episodeNumber
      duration
      datePublished(formatString: "MMM DD, YYYY")
      audioEmbedLink
      thumbnail {
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
      datePublished
      slug
    }
    previous: contentfulPodcasts(id: { eq: $prevEpId }) {
      episodeTitle
      episodeNumber
      datePublished
      slug
    }
  }
`
