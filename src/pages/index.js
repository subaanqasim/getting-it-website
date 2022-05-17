import React from "react"
import Layout from "../components/global/Layout"
import HeroSection from "../components/HeroSection"
import LatestEpisodes from "../components/LatestEpisodes"
import TheHosts from "../components/TheHosts"
import WhatIsGettingIt from "../components/WhatIsGettingIt"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LatestEpisodes />
      <TheHosts />
      <WhatIsGettingIt />
    </Layout>
  )
}
