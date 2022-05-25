import React from "react"
import { Container } from "@mantine/core"
import Heading1 from "./Heading1/Heading1"

export default function PageHeader({
  title,
  subtitle,
  subtitleIcon,
  subtitlePosition = "center",
  spline,
}) {
  return (
    <header>
      <Container
        size="xl"
        mt="8em"
        style={{
          textAlign: "center",
          minHeight: "calc(80vh - 8em)",
        }}
      >
        <Heading1
          title={title}
          subtitle={subtitle}
          subtitleIcon={subtitleIcon}
          subtitlePosition={subtitlePosition}
        />
      </Container>
    </header>
  )
}
