import React from "react"
import { createStyles, Card, Avatar, Text, Group } from "@mantine/core"
import { StaticImage } from "gatsby-plugin-image"

const BREAKPOINT = "@media (max-width: 768px)"
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
    width: "100%",
  },

  group: {
    flexWrap: "nowrap",

    [BREAKPOINT]: {
      flexWrap: "wrap",
    },
  },

  img: {
    alignSelf: "stretch",

    [BREAKPOINT]: {
      width: "100%",
    },
  },
}))

const mockData = {
  image:
    "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  category: "technology",
  title: "The best laptop for Frontend engineers in 2022",
  date: "Feb 6th",
  author: {
    name: "Elsa Brown",
    avatar:
      "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
}

export default function EpisodeCard() {
  const { classes } = useStyles()

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group spacing={0} className={classes.group}>
        <StaticImage
          className={classes.img}
          style={{ alignSelf: "stretch" }}
          src="../assets/images/test.avif"
          alt=""
          placeholder="blurred"
          layout="constrained"
          fit="cover"
        />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {mockData.category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {mockData.title}
          </Text>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/episode/5qxAVLMfsb5XH5ZjNwR0PH?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <Group noWrap spacing="xs" mt="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={mockData.author.avatar} />
              <Text size="xs">{mockData.author.name}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              Feb 21, 2022 / Episode 70 / 00:20:31
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  )
}
