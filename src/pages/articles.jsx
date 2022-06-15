import React from "react"
import { Container, Text } from "@mantine/core"
import { News } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"
import LatestEpisodes from "../components/LatestEpisodes"
import WebpageSeo from "../components/Seo/WebpageSeo"

export default function Articles() {
  return (
    <>
      <WebpageSeo
        title="Articles"
        slug="articles"
        description="Written ramblings rather than the usual verbal ones on the Getting It podcast. Essentially, a brain dump of thoughts, ideas and opinions."
      />
      <PageHeader
        title="Articles"
        subtitle="Written ramblings rather than verbal ones"
        subtitleIcon={<News size={16} />}
        spline={process.env.ARTICLES_3D}
      />
      <main>
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
      </main>
    </>
  )
}
