import React from "react"
import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  FloatingTooltip,
} from "@mantine/core"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import useStyles from "./PodcastLinksGrid.styles"

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "podcast-icons" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 32, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`

const platformData = [
  {
    id: "apple_podcasts",
    title: "Apple Podcasts",
    icon: {},
    tooltip: "Standard I guess",
    link: "https://podcasts.apple.com/gb/podcast/getting-it/id1527023437",
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: {},
    tooltip: "Pretty mainstream",
    link: "https://open.spotify.com/show/53u8uvIyxnrYzxOIKAqSTI",
  },
  {
    id: "google_podcasts",
    title: "Google Podcasts",
    icon: {},
    tooltip: "Alright...",
    link: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yOWZiMjMzMC9wb2RjYXN0L3Jzcw%3D%3D",
  },
  {
    id: "pocket_casts",
    title: "Pocket Casts",
    icon: {},
    tooltip: "Correct choice",
    link: "https://pca.st/jfbdr66c",
  },
  {
    id: "stitcher",
    title: "Stitcher",
    icon: {},
    tooltip: "Meh",
    link: "https://www.stitcher.com/podcast/getting-it",
  },
  {
    id: "overcast",
    title: "Overcast",
    icon: {},
    tooltip: "Bit weird..",
    link: "https://overcast.fm/itunes1527023437/getting-it",
  },
  {
    id: "amazon_music",
    title: "Amazon Music",
    icon: {},
    tooltip: "This actually exists??",
    link: "https://music.amazon.com/podcasts/58d390fb-1cdb-458f-a5f0-e05c4f1d8d42/getting-it",
  },
  {
    id: "castbox",
    title: "Castbox",
    icon: {},
    tooltip: "Really?",
    link: "https://castbox.fm/channel/id3189567",
  },
  {
    id: "rss",
    title: "RSS",
    icon: {},
    tooltip: "A true power-user",
    link: "https://anchor.fm/s/29fb2330/podcast/rss",
  },
]

export default function PodcastLinksGrid() {
  const { classes } = useStyles()

  const {
    allFile: { nodes: iconData },
  } = useStaticQuery(query)

  const items = platformData.map((item) => {
    item.icon = iconData.find((icon) => icon.name === item.id)

    return (
      <FloatingTooltip
        key={item.title}
        label={item.tooltip}
        position="top"
        transition="fade"
        transitionDuration={200}
        transitionTimingFunction="ease"
      >
        <UnstyledButton
          className={classes.item}
          component="a"
          href={item.link}
          target="_blank"
        >
          <GatsbyImage
            image={item.icon.childImageSharp.gatsbyImageData}
            alt=""
            width={32}
            imgStyle={{ borderRadius: "6px" }}
          />
          <Text size="xs" mt={7}>
            {item.title}
          </Text>
        </UnstyledButton>
      </FloatingTooltip>
    )
  })

  return (
    <Card withBorder radius="md" mb="lg" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>
          Choose your favourite podcast platform
        </Text>
        <Anchor
          size="xs"
          href="https://pod.link/gettingit"
          target="_blank"
          color="dimmed"
          sx={{ lineHeight: 1 }}
        >
          + a few more
        </Anchor>
      </Group>
      <SimpleGrid
        cols={3}
        mt="md"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "xs", cols: 2, spacing: "md" },
          // { maxWidth: 391, cols: 1, spacing: "sm" },
        ]}
      >
        {items}
      </SimpleGrid>
    </Card>
  )
}
