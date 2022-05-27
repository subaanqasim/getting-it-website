import React from "react"
import { YinYang } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/seo/WebpageSeo"

export default function About() {
  return (
    <>
      <WebpageSeo
        title="Our Ethos"
        description="Learn more about hosts and why the Getting It podcast was made. We explore topics both familiar and unfamiliar to us to find out what makes them interesting, so that we can expand our horizons and further our understanding of the world and people around us."
        slug="about"
      />
      <PageHeader
        title="Our Ethos"
        subtitle="The who, what, where and why"
        subtitleIcon={<YinYang size={16} />}
      />
    </>
  )
}
