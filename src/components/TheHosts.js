import React from "react"
import {
  Title,
  Container,
  Divider,
  Box,
  createStyles,
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

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[1],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.other.fontSizesSmall[1],
    },
  },

  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    maxWidth: "500px",
  },

  cardTitle: {
    fontSize: theme.other.fontSizesLarge[4],
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}))

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "Health & Fitness",
    title: "Avid YouTube Watcher",
    footer: "Follow →",
    author: {
      name: "Subaan Qasim",
      location: "London, UK",
      image: "",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "Languages",
    title: "Random Fact Dictionary",
    footer: "Follow →",
    author: {
      name: "Daniel Redfearn",
      location: "London, UK",
      image: "",
    },
  },
]

export default function LatestEpisodes() {
  const { classes, theme } = useStyles()

  const profiles = data.map((person) => (
    <Grid.Col sm={6} style={{ display: "flex", justifyContent: "center" }}>
      <Card
        key={person.author.name}
        withBorder
        p="lg"
        radius="md"
        className={classes.card}
        shadow="md"
      >
        <Card.Section mb="sm">
          <img src={person.image} alt={person.title} />
        </Card.Section>

        <Badge>{person.category}</Badge>

        <Text weight={700} className={classes.cardTitle} mt="xs">
          {person.title}
        </Text>
        <Text size="md" color="dimmed">
          --- Brief summary/description ---
        </Text>

        <Group mt="lg">
          <Avatar radius="sm" />
          <div>
            <Text weight={500}>{person.author.name}</Text>
            <Text size="xs" color="dimmed">
              Location: {person.author.location}
            </Text>
          </div>
        </Group>

        <Card.Section className={classes.footer}>
          <Group position="center">
            <Text size="xs" color="dimmed">
              {person.footer}
            </Text>
            <Group spacing={0}>
              <ActionIcon>
                <BrandInstagram size={18} color={theme.colors.giOrange[6]} />
              </ActionIcon>
              <ActionIcon>
                <BrandTwitter size={16} color={theme.colors.giBlue[6]} />
              </ActionIcon>
              <ActionIcon>
                <BrandLinkedin size={18} color={theme.colors.giPink[6]} />
              </ActionIcon>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </Grid.Col>
  ))

  return (
    <Container size="xl" mt="8em">
      <Divider
        my="xs"
        labelPosition="left"
        label={
          <>
            <Users size={12} />
            <Box ml={5} style={{ fontSize: "1rem" }}>
              A little bit about us
            </Box>
          </>
        }
      />
      <Title order={2} className={classes.title}>
        The Hosts
      </Title>
      <Grid justify="center" mt="2em">
        {profiles}
      </Grid>
    </Container>
  )
}
