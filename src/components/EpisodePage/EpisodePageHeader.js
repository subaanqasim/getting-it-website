import React from "react"
import { Container, Title } from "@mantine/core"
import Heading1 from "../Heading1"

export default function EpisodePageHeader({ title, embedURL }) {
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
        <Heading1 title={title} small={true} />
        {/* TAGS AND OTHER METADATA */}

        {/* SPOTIFY PLAYER EMBED */}
      </Container>
    </header>
  )
}
