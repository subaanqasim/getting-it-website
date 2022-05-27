import React from "react"
import HeroSection from "../components/HeroSection/HeroSection"
import LatestEpisodes from "../components/LatestEpisodes"
import WebpageSeo from "../components/seo/WebpageSeo"
import TheHosts from "../components/TheHosts/TheHosts"
import WhatIsGettingIt from "../components/WhatIsGettingIt"

export default function Home() {
  return (
    <>
      <WebpageSeo
        slug=""
        linkTags={[
          {
            rel: "alternate",
            type: "application/rss+xml",
            title: "Getting It",
            href: "https://anchor.fm/s/29fb2330/podcast/rss",
          },
        ]}
      />
      <HeroSection />
      <LatestEpisodes />
      <TheHosts />
      <WhatIsGettingIt />
    </>
  )
}
