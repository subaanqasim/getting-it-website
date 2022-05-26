import React from "react"
import HeroSection from "../components/HeroSection/HeroSection"
import LatestEpisodes from "../components/LatestEpisodes"
import TheHosts from "../components/TheHosts/TheHosts"
import WhatIsGettingIt from "../components/WhatIsGettingIt"

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestEpisodes />
      <TheHosts />
      <WhatIsGettingIt />
    </>
  )
}
