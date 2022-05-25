import React from "react"
import { Container, Text } from "@mantine/core"
import { News } from "tabler-icons-react"
import Layout from "../components/global/Layout"
import PageHeader from "../components/PageHeader"
import LatestEpisodes from "../components/LatestEpisodes"

export default function articles() {
  return (
    <Layout>
      <PageHeader
        title="Articles"
        subtitle="Written ramblings rather than verbal ones"
        subtitleIcon={<News size={16} />}
      />
      <Container size="lg">
        <Text size="xl">Unfortunately we haven't written anything yet.</Text>
        <Text color="dimmed" size="xs">
          Most likely because we're lazy.
        </Text>
        <Text
          mt="md"
          size="xl"
          weight={700}
          variant="gradient"
          gradient={{ from: "giBlue", to: "giPink", deg: 45 }}
        >
          Hopefully we'll write something soon.
        </Text>
      </Container>
      <LatestEpisodes />
    </Layout>
  )
}
