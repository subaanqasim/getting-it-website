import React, { useRef } from "react"
import HeroSection from "../components/HeroSection/HeroSection"
import LatestEpisodes from "../components/LatestEpisodes"
import WebpageSeo from "../components/Seo/WebpageSeo"
import TheHosts from "../components/TheHosts/TheHosts"
import WhatIsGettingIt from "../components/WhatIsGettingIt/WhatIsGettingIt"

export default function Home() {
  const latestEpSection = useRef(null)
  const handleScroll = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 110, behavior: "smooth" })
  }

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
      <HeroSection handleScroll={() => handleScroll(latestEpSection)} />
      <main>
        <LatestEpisodes reference={latestEpSection} />
        <WhatIsGettingIt />
        <TheHosts />
      </main>
    </>
  )
}
