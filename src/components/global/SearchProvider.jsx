import React from "react"
import { SpotlightProvider } from "@mantine/spotlight"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Microphone, Search } from "tabler-icons-react"

const query = graphql`
  {
    allContentfulPodcasts(sort: { fields: episodeNumber, order: DESC }) {
      nodes {
        episodeNumber
        episodeTitle
        excerpt
        keywords
        slug
      }
    }
  }
`

function getActions(data) {
  return data.map((item) => {
    const epKeywords = item.keywords
      ? [...item.keywords].filter((kw) => kw !== "getting it")
      : []
    return {
      title: item.episodeTitle,
      description: item.excerpt,
      keywords: [`${item.episodeNumber}`, ...epKeywords],
      icon: <Microphone />,
      onTrigger: () => navigate(`/episodes/${item.slug}`),
    }
  })
}

export default function SearchProvider({ children }) {
  const { allContentfulPodcasts } = useStaticQuery(query)

  return (
    <>
      <SpotlightProvider
        actions={getActions(allContentfulPodcasts.nodes)}
        highlightQuery
        searchIcon={<Search />}
        searchPlaceholder="Search episode number or keywords"
        limit={5}
        nothingFoundMessage="Oops, nothing found :("
      >
        {children}
      </SpotlightProvider>
    </>
  )
}
