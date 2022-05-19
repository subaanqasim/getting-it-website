import React from "react"
import {
  Title,
  Container,
  Button,
  Group,
  Divider,
  Box,
  createStyles,
} from "@mantine/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import EpisodeCard from "./EpisodeCard"
import { Microphone } from "tabler-icons-react"

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[1],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.other.fontSizesSmall[1],
    },
  },
}))

const query = graphql`
  {
    allContentfulPodcasts(
      sort: { fields: datePublished, order: ASC }
      limit: 3
    ) {
      nodes {
        id
        episodeTitle
        episodeNumber
        datePublished(formatString: "MMM DD, YYYY")
        tags
        audioEmbedLink
        duration
        excerpt
        slug
        thumbnail {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            resizingBehavior: CROP
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`

export default function LatestEpisodes() {
  const { classes } = useStyles()
  const {
    allContentfulPodcasts: { nodes: episodeData },
  } = useStaticQuery(query)

  const episodes = episodeData.map((ep) => (
    <EpisodeCard
      key={ep.id}
      tags={ep.tags}
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
        <Divider
          my="xs"
          labelPosition="left"
          label={
            <>
              <Microphone size={16} />
              <Box ml={5} style={{ fontSize: "1rem" }}>
                Listen to our most recent ramblings
              </Box>
            </>
          }
        />
        <Title order={2} className={classes.title}>
          Latest Episodes
        </Title>

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
