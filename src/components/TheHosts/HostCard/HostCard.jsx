import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Card,
  Badge,
  Text,
  Group,
  Avatar,
  ActionIcon,
  Grid,
} from "@mantine/core"
import { BrandInstagram, BrandLinkedin, BrandTwitter } from "tabler-icons-react"
import useStyles from "./HostCard.styles"

export default function HostCard({ hostData }) {
  const { classes, theme } = useStyles()

  const hosts = hostData.map((person) => (
    <Grid.Col
      key={person.id}
      sm={hostData.length > 1 ? 6 : 8}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card withBorder p="lg" radius="md" className={classes.card} shadow="md">
        <Card.Section mb="sm">
          <GatsbyImage
            image={person.portrait.gatsbyImageData}
            alt={person.name}
          />
        </Card.Section>

        <Group spacing="sm">
          {person.interests.map((interest, i) => (
            <Badge radius="sm" key={i}>
              {interest}
            </Badge>
          ))}
        </Group>

        <Text weight={700} className={classes.cardTitle} mt="xs">
          {person.funnyTitle}
        </Text>

        <Text size="md" color="dimmed">
          {person.shortDescription.shortDescription}
        </Text>

        <Group mt="lg">
          <Avatar
            radius="sm"
            color={person.name === "Subaan Qasim" ? "giBlue" : "giPink"}
          >
            {person.name === "Subaan Qasim" ? "🚀" : "🔥"}
          </Avatar>
          <div>
            <Text weight={500}>{person.name}</Text>
            <Text size="xs" color="dimmed">
              Location: {person.location}
            </Text>
          </div>
        </Group>

        <Card.Section className={classes.footer}>
          <Group position="center">
            <Text size="xs" color="dimmed">
              Follow →
            </Text>
            <Group spacing={0}>
              <ActionIcon component="a" href={person.instagram}>
                <BrandInstagram size={18} color={theme.colors.giOrange[6]} />
              </ActionIcon>
              <ActionIcon component="a" href={person.twitter}>
                <BrandTwitter size={16} color={theme.colors.giBlue[6]} />
              </ActionIcon>
              <ActionIcon component="a" href={person.linkedIn}>
                <BrandLinkedin size={18} color={theme.colors.giPink[6]} />
              </ActionIcon>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </Grid.Col>
  ))

  return (
    <Grid justify="center" mt="2em">
      {hosts}
    </Grid>
  )
}
