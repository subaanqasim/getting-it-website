import React from "react"
import { Microphone } from "tabler-icons-react"
import EpisodeList from "../components/EpisodeList"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/seo/WebpageSeo"

export default function episodes() {
  return (
    <>
      <WebpageSeo
        title="Episodes"
        slug="episodes"
        description="All of the episodes of the Getting It Podcast – the podcast where we try to understand life just a little bit more. Hosted by Subaan Qasim and Daniel Redfearn, we explore topics both familiar and unfamiliar to us to find out what makes them interesting"
      />
      <PageHeader
        title="Episodes"
        subtitle="All of our episodes in one place"
        subtitleIcon={<Microphone size={16} />}
      />
      <EpisodeList />
    </>
  )
}
