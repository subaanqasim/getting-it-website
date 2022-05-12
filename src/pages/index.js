import React from "react"
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import LatestEpisodes from "../components/LatestEpisodes"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LatestEpisodes />
    </Layout>
  )
}
