import React from "react"
import { Title, Container } from "@mantine/core"
import EpisodeCard from "./EpisodeCard"

export default function LatestEpisodes() {
  return (
    <Container size="lg">
      <Title order={2}>Latest Episodes</Title>
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
    </Container>
  )
}
