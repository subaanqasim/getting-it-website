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
import { Link } from "gatsby"
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

export default function LatestEpisodes() {
  const { classes } = useStyles()

  return (
    <Container size="xl" mt="8em">
      <Divider
        my="xs"
        labelPosition="left"
        label={
          <>
            <Microphone size={12} />
            <Box ml={5} style={{ fontSize: "1rem" }}>
              Listen to our most recent ramblings
            </Box>
          </>
        }
      />
      <Title order={2} className={classes.title}>
        Latest Episodes
      </Title>
      <EpisodeCard />
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
  )
}
