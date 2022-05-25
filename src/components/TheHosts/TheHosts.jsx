import React from "react"
import {
  Container,
  Card,
  Badge,
  Text,
  Group,
  Avatar,
  ActionIcon,
  Grid,
} from "@mantine/core"
import {
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
  Users,
} from "tabler-icons-react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Heading2 from "../Heading2/Heading2"
import useStyles from "./TheHosts.styles"

const query = graphql`
  {
    allContentfulAuthor(sort: { fields: name, order: DESC }) {
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

export default function LatestEpisodes() {
  const { classes, theme } = useStyles()
  const {
    allContentfulAuthor: { nodes: hostData },
  } = useStaticQuery(query)

  const hosts = hostData.map((person) => (
    <Grid.Col
      key={person.id}
      sm={6}
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
    <section>
      <Container size="xl" mt="8em">
        <Heading2
          title="The Hosts"
          subtitle="A little bit about us"
          subtitleIcon={<Users size={16} />}
        />
        <Grid justify="center" mt="2em">
          {hosts}
        </Grid>
      </Container>
    </section>
  )
}
