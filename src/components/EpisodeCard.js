import React from "react"
import { createStyles, Card, Text, Group, Badge, Title } from "@mantine/core"
import { GatsbyImage } from "gatsby-plugin-image"
import { CalendarEvent, Clock, List } from "tabler-icons-react"
import { Link } from "gatsby"

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
    textDecoration: "none",

    "&:hover": {
      color: theme.colors.giOrange[4],
    },

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
    maxWidth: "35%",
    alignSelf: "stretch",

    [BREAKPOINT]: {
      maxWidth: "100%",
      maxHeight: "350px",
    },
  },

  icon: {
    strokeWidth: "1.5px",
  },
}))

export default function EpisodeCard({
  tags,
  title,
  duration,
  pubDate,
  epNum,
  embedURL,
  excerpt,
  img,
  slug,
}) {
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
        <Link to={`/${slug}`} className={classes.img}>
          <GatsbyImage image={img} alt="" style={{ height: "100%" }} />
        </Link>
        <div className={classes.body}>
          <Group spacing="0.75em" mb="xs">
            {tags.map((tag, i) => (
              <Badge key={i} radius="sm">
                {tag.name}
              </Badge>
            ))}
          </Group>
          <Title
            component={Link}
            to={`/${slug}`}
            order={3}
            className={classes.title}
          >
            {title}
          </Title>

          <Group spacing="sm" mt="xs" my="md">
            <Group spacing="0.25em" noWrap>
              <Clock className={classes.icon} size={16} />
              <Text size="xs" color="dimmed">
                {`${duration} mins`}
              </Text>
            </Group>

            <Text size="xs" color="dimmed">
              /
            </Text>

            <Group spacing="0.25em" noWrap>
              <CalendarEvent className={classes.icon} size={16} />
              <Text size="xs" color="dimmed">
                {pubDate}
              </Text>
            </Group>

            <Text size="xs" color="dimmed">
              /
            </Text>
            <Group spacing="0.25em" noWrap>
              <List className={classes.icon} size={16} />
              <Text size="xs" color="dimmed">
                {`ep. ${epNum}`}
              </Text>
            </Group>
          </Group>

          <Text mb="md" size="sm">
            {excerpt}
          </Text>

          {/* <iframe
            title={title}
            style={{ borderRadius: "12px" }}
            src={`${embedURL}?utm_source=generator&theme=0`}
            width="100%"
            height="152px"
            frameBorder="0"
            allowFullScreen=""
            allow="encrypted-media *; fullscreen; picture-in-picture"
          ></iframe> */}
        </div>
      </Group>
    </Card>
  )
}
