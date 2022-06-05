import React from "react"
import { graphql } from "gatsby"
import { YinYang } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/seo/WebpageSeo"
import Ethos from "../copy/ethos.mdx"
import MdxProvider from "../components/EpisodePage/Mdx/MdxProvider"
import { Container } from "@mantine/core"
import LatestEpisodes from "../components/LatestEpisodes"

export default function About({ data }) {
  const subaanData = data.subaanData.nodes
  const danData = data.danData.nodes

  return (
    <>
      <WebpageSeo
        title="Our Ethos"
        description="Learn more about hosts and why the Getting It podcast was made. We explore topics both familiar and unfamiliar to us to find out what makes them interesting, so that we can expand our horizons and further our understanding of the world and people around us."
        slug="about"
      />

      <PageHeader
        title="Our Ethos"
        subtitle="The who, what, where and why"
        subtitleIcon={<YinYang size={16} />}
      />
      <main>
        <>
          <Container size="sm">
            <MdxProvider>
              <Ethos danData={danData} subaanData={subaanData} />
            </MdxProvider>
          </Container>
          <LatestEpisodes />
        </>
      </main>
    </>
  )
}

export const query = graphql`
  {
    subaanData: allContentfulAuthor(filter: { name: { eq: "Subaan Qasim" } }) {
      nodes {
        id
        name
        funnyTitle
        interests
        location
        instagram
        twitter
        linkedIn
        portrait {
          gatsbyImageData(
            placeholder: BLURRED
            formats: WEBP
            cropFocus: TOP
            aspectRatio: 0.8
            resizingBehavior: FILL
          )
        }
        shortDescription {
          shortDescription
        }
      }
    }
    danData: allContentfulAuthor(filter: { name: { eq: "Daniel Redfearn" } }) {
      nodes {
        id
        name
        funnyTitle
        interests
        location
        instagram
        twitter
        linkedIn
        portrait {
          gatsbyImageData(
            placeholder: BLURRED
            formats: WEBP
            cropFocus: TOP
            aspectRatio: 0.8
            resizingBehavior: FILL
          )
        }
        shortDescription {
          shortDescription
        }
      }
    }
  }
`
