import React from "react"
import { Microphone } from "tabler-icons-react"
import EpisodeList from "../components/EpisodeList"
import PageHeader from "../components/PageHeader"

export default function episodes() {
  return (
    <>
      <PageHeader
        title="Episodes"
        subtitle="All of our episodes in one place"
        subtitleIcon={<Microphone size={16} />}
      />
      <EpisodeList />
    </>
  )
}
