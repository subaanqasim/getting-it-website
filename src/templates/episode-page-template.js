import React from "react"
import { graphql } from "gatsby"
import { Container } from "@mantine/core"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "../components/global/Layout"
import EpisodePageHeader from "../components/EpisodePage/EpisodePageHeader"
import MdxProvider from "../components/EpisodePage/Mdx/MdxProvider"

export default function EpisodePageTemplate({ data }) {
  const { current, next, previous } = data
  return (
    <Layout>
      <EpisodePageHeader epData={current} />
      <Container size="sm">
        {/* ADD 'LISTEN EVERYWHERE' COMPONENT WITH BUTTONS TO ALL PLAYERS */}
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
