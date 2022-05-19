import React from "react"
import { Container } from "@mantine/core"
import { InfoCircle } from "tabler-icons-react"
import Heading2 from "./Heading2"

export default function WhatIsGettingIt() {
  return (
    <section>
      <Container size="xl" mt="8em">
        <Heading2
          title="What is Getting It?"
          subtitle="About the Podcast"
          subtitleIcon={<InfoCircle size={16} />}
        />
      </Container>
    </section>
  )
}
