import React, { useState } from "react"
import { Chip, Chips, Container, Kbd, TextInput } from "@mantine/core"
import { useStaticQuery, graphql } from "gatsby"
import EpisodeCard from "./EpisodeCard"
import getTagsList from "../utils/getTagsList"
import { Search } from "tabler-icons-react"
import { useOs } from "@mantine/hooks"

const query = graphql`
  {
    allContentfulPodcasts(sort: { fields: datePublished, order: ASC }) {
      nodes {
        id
        episodeTitle
        episodeNumber
        datePublished(formatString: "MMM DD, YYYY")
        tags
        audioEmbedLink
        duration
        excerpt
        slug
        thumbnail {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            resizingBehavior: CROP
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`

export default function EpisodeList() {
  const os = useOs()
  const [filter, setFilter] = useState("All")

  const {
    allContentfulPodcasts: { nodes: episodeData },
  } = useStaticQuery(query)

  const tagsList = getTagsList(episodeData)
  const tagFilters = tagsList.map((tag) => <Chip value={tag}>{tag}</Chip>)

  const filteredEpisodeData =
    filter === "All"
      ? episodeData
      : episodeData.filter((ep) => ep.tags.includes(filter))

  const filteredEpisodes = filteredEpisodeData.map((ep) => (
    <EpisodeCard
      key={ep.id}
      tags={ep.tags}
      title={ep.episodeTitle}
      excerpt={ep.excerpt}
      duration={ep.duration}
      pubDate={ep.datePublished}
      epNum={ep.episodeNumber}
      embedURL={ep.audioEmbedLink}
      img={ep.thumbnail.gatsbyImageData}
      slug={ep.slug}
    />
  ))

  const rightSection = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "64px",
      }}
    >
      <Kbd>{os === "windows" ? "Ctrl" : "⌘"}</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>K</Kbd>
    </div>
  )

  return (
    <Container size="xl">
      <TextInput
        size="md"
        placeholder="Search all episodes"
        my="lg"
        mx="auto"
        style={{ maxWidth: 850 }}
        icon={<Search size={16} />}
        rightSection={rightSection}
      />
      <Chips
        size="md"
        spacing="md"
        radius="sm"
        variant="outline"
        value={filter}
        onChange={setFilter}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Chip value="All">All</Chip>
        {tagFilters}
      </Chips>

      {filteredEpisodes}
    </Container>
  )
}
