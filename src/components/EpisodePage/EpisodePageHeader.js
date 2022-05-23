import React from "react"
import { Container, Text, Group, Badge, createStyles } from "@mantine/core"
import Heading1 from "../Heading1"
import { CalendarEvent, Clock, List } from "tabler-icons-react"

const useStyles = createStyles({
  icon: {
    strokeWidth: "1.5px",
  },
})

export default function EpisodePageHeader({ epData }) {
  const { classes } = useStyles()
  const {
    episodeTitle,
    audioEmbedLink,
    metadata,
    duration,
    episodeNumber,
    datePublished,
  } = epData

  return (
    <header>
      <Container
        size="xl"
        mt="8em"
        style={{
          // textAlign: "center",
          minHeight: "calc(70vh - 8em)",
        }}
      >
        <div style={{ marginBottom: "0.5em" }}>
          <Heading1 title={episodeTitle} small={true} />
        </div>

        <Group spacing="0.75em" mb="xs">
          {metadata.tags.map((tag, i) => (
            <Badge size="lg" key={i} radius="sm">
              {tag.name}
            </Badge>
          ))}
        </Group>
        <Group spacing="sm" mt="xs" my="md">
          <Group spacing="0.25em" noWrap>
            <Clock className={classes.icon} size={16} />
            <Text size="md" color="dimmed">
              {`${duration} mins`}
            </Text>
          </Group>

          <Text size="md" color="dimmed">
            /
          </Text>

          <Group spacing="0.25em" noWrap>
            <CalendarEvent className={classes.icon} size={16} />
            <Text size="md" color="dimmed">
              {datePublished}
            </Text>
          </Group>

          <Text size="xs" color="dimmed">
            /
          </Text>
          <Group spacing="0.25em" noWrap>
            <List className={classes.icon} size={16} />
            <Text size="md" color="dimmed">
              {`ep. ${episodeNumber}`}
            </Text>
          </Group>
        </Group>

        <div>
          <iframe
            title={episodeTitle}
            style={{ borderRadius: "12px" }}
            src={`${audioEmbedLink}?utm_source=generator&theme=0`}
            width="100%"
            height="152px"
            frameBorder="0"
            allowFullScreen=""
            allow="encrypted-media *; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </Container>
    </header>
  )
}
