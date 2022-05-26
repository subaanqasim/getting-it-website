import React from "react"
import { SimpleGrid } from "@mantine/core"
import EpisodeSibling from "./EpisodeSibling/EpisodeSibling"

export default function EpisodeSiblings({ next, previous }) {
  return (
    <SimpleGrid my="xl" cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
      {previous && <EpisodeSibling type="previous" data={previous} />}
      {next && <EpisodeSibling type="next" data={next} />}
    </SimpleGrid>
  )
}
