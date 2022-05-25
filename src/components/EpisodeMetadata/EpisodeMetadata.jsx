import React from "react"
import { Badge, Group, Text } from "@mantine/core"
import { CalendarEvent, Clock, List } from "tabler-icons-react"
import useStyles from "./EpisodeMetadata.styles"

export default function EpisodeMetadata({
  mt = "xs",
  mb = "xs",
  textColor = "dimmed",
  textSize = "xs",
  badgeSize = "md",
  tags,
  duration,
  epNum,
  pubDate,
}) {
  const { classes } = useStyles()

  return (
    <>
      <Group spacing="0.75em" mb={mb} mt={mt}>
        {tags.map((tag, i) => (
          <Badge key={i} radius="sm" size={badgeSize}>
            {tag.name}
          </Badge>
        ))}
      </Group>

      <Group spacing="sm" mt="xs" my="md">
        <Group spacing="0.25em" noWrap>
          <Clock className={classes.icon} size={16} />
          <Text size={textSize} color={textColor}>
            {`${duration} mins`}
          </Text>
        </Group>

        <Text size={textSize} color={textColor}>
          /
        </Text>

        <Group spacing="0.25em" noWrap>
          <CalendarEvent className={classes.icon} size={16} />
          <Text size={textSize} color={textColor}>
            {pubDate}
          </Text>
        </Group>

        <Text size={textSize} color={textColor}>
          /
        </Text>
        <Group spacing="0.25em" noWrap>
          <List className={classes.icon} size={16} />
          <Text size={textSize} color={textColor}>
            {`ep. ${epNum}`}
          </Text>
        </Group>
      </Group>
    </>
  )
}
