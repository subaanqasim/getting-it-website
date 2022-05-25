import React from "react"
import { Container, Button, Group } from "@mantine/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import EpisodeCard from "./EpisodeCard/EpisodeCard"
import { Microphone } from "tabler-icons-react"
import Heading2 from "./Heading2/Heading2"

const query = graphql`
  {
    allContentfulPodcasts(
      sort: { fields: datePublished, order: DESC }
      limit: 3
    ) {
      nodes {
        episodeTitle
        episodeNumber
        id
        datePublished(formatString: "MMM DD, YYYY")
        duration
        excerpt
        audioEmbedLink
        slug
        thumbnail {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            resizingBehavior: CROP
            layout: CONSTRAINED
          )
        }
        metadata {
          tags {
            name
          }
        }
      }
    }
  }
`

export default function LatestEpisodes() {
  const {
    allContentfulPodcasts: { nodes: episodeData },
  } = useStaticQuery(query)

  const episodes = episodeData.map((ep) => (
    <EpisodeCard
      key={ep.id}
      tags={ep.metadata.tags}
      title={ep.episodeTitle}
      excerpt={ep.excerpt}
      duration={ep.duration}
      pubDate={ep.datePublished}
      epNum={ep.episodeNumber}
      embedURL={ep.audioEmbedLink}
      img={ep.thumbnail.gatsbyImageData}
      slug={ep.slug}
    />
  ))

  return (
    <section>
      <Container size="xl" mt="8em">
        <Heading2
          title="Latest Episodes"
          subtitle="Listen to our most recent ramblings"
          subtitleIcon={<Microphone size={16} />}
        />

        {episodes}

        <Group position="center" spacing="md" mt="lg">
          <Button
            component={Link}
            to="/episodes"
            variant="light"
            size="lg"
            // color="giBlue"
          >
            All episodes
          </Button>
          <Button variant="default" size="lg">
            Load more
          </Button>
        </Group>
      </Container>
    </section>
  )
}
