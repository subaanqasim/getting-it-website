import React from "react"
import { createStyles, Card, Text, Group, Badge, Title } from "@mantine/core"
import { StaticImage } from "gatsby-plugin-image"
import { CalendarEvent, Clock, List } from "tabler-icons-react"

const BREAKPOINT = "@media (max-width: 768px)"
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    lineHeight: 1.2,
    fontSize: "22px",

    [BREAKPOINT]: {
      fontSize: "20px",
    },
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

  icon: {
    strokeWidth: "1.5px",
  },
}))

const mockData = {
  image:
    "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  title:
    "Is One's Downfall Inevitable Once They Reach The Top? - Shower Thoughts 🚿 ep. 22",
  date: "May 9th",
}

export default function EpisodeCard() {
  const { classes } = useStyles()

  return (
    <Card
      withBorder
      radius="md"
      p={0}
      mt="2em"
      className={classes.card}
      shadow="md"
    >
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
          <Group spacing="0.75em">
            <Badge radius="sm">Tag 1</Badge>
            <Badge radius="sm">Category 21</Badge>
            <Badge radius="sm">Shower Thoughts 🚿</Badge>
          </Group>
          <Title order={3} mt="xs" className={classes.title}>
            {mockData.title}
          </Title>

          <Group noWrap spacing="sm" mt="xs" my="md">
            <Group spacing="0.25em" noWrap>
              <Clock className={classes.icon} size={16} />
              <Text size="xs" color="dimmed">
                1h 28mins
              </Text>
            </Group>

            <Text size="xs" color="dimmed">
              /
            </Text>

            <Group spacing="0.25em" noWrap>
              <CalendarEvent className={classes.icon} size={16} />
              <Text size="xs" color="dimmed">
                Feb 21, 2022
              </Text>
            </Group>

            <Text size="xs" color="dimmed">
              /
            </Text>
            <Group spacing="0.25em" noWrap>
              <List className={classes.icon} size={16} />
              <Text size="xs" color="dimmed">
                Ep. 70
              </Text>
            </Group>
          </Group>

          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/episode/5qxAVLMfsb5XH5ZjNwR0PH?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </Group>
    </Card>
  )
}
