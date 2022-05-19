import React from "react"
import { Microphone } from "tabler-icons-react"
import EpisodeList from "../components/EpisodeList"
import Layout from "../components/global/Layout"
import PageHeader from "../components/PageHeader"

export default function episodes() {
  return (
    <Layout>
      <PageHeader
        title="Episodes"
        subtitle="All of our episodes in one place"
        subtitleIcon={<Microphone size={16} />}
      />
      <EpisodeList />
    </Layout>
  )
}
