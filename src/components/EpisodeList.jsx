import React, { useEffect, useState, useRef } from "react"
import {
  Chip,
  Chips,
  Container,
  Kbd,
  Pagination,
  TextInput,
} from "@mantine/core"
import { useStaticQuery, graphql } from "gatsby"
import EpisodeCard from "./EpisodeCard/EpisodeCard"
import getTagsList from "../utils/getTagsList"
import { Search } from "tabler-icons-react"
import { useOs } from "@mantine/hooks"
import getPages from "../utils/getPages"

const query = graphql`
  {
    allContentfulPodcasts(sort: { fields: datePublished, order: DESC }) {
      nodes {
        episodeTitle
        episodeNumber
        id
        datePublished(formatString: "MMM DD, YYYY")
        duration
        excerpt
        audioEmbedLink
        slug
        thumbnail {
          gatsbyImageData(
            placeholder: DOMINANT_COLOR
            resizingBehavior: CROP
            layout: CONSTRAINED
          )
        }
        metadata {
          tags {
            name
          }
        }
      }
    }
  }
`

export default function EpisodeList() {
  const os = useOs()
  const [filter, setFilter] = useState("All")
  const [page, setPage] = useState(1)
  const [pagedEpisodeData, setPagedEpisodeData] = useState([])
  const [displayedEpisodes, setDisplayedEpisodes] = useState([])
  const isMounted = useRef(false)
  const ITEMS_PER_PAGE = 4

  const {
    allContentfulPodcasts: { nodes: allEpisodeData },
  } = useStaticQuery(query)

  const tagsList = getTagsList(allEpisodeData)
  const tagFilters = tagsList.map((tag, i) => (
    <Chip key={i} value={tag}>
      {tag}
    </Chip>
  ))

  useEffect(() => {
    if (filter === "All") {
      setPagedEpisodeData(getPages(allEpisodeData, ITEMS_PER_PAGE))
      setPage(1)
    } else {
      const filtered = allEpisodeData.filter((ep) =>
        ep.metadata.tags.some((tag) => tag.name === filter)
      )
      setPagedEpisodeData(getPages(filtered, ITEMS_PER_PAGE))
      setPage(1)
    }
  }, [filter, allEpisodeData])

  useEffect(() => {
    if (isMounted.current) {
      const items = pagedEpisodeData[page - 1].map((ep) => (
        <EpisodeCard
          key={ep.id}
          tags={ep.metadata.tags}
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
      setDisplayedEpisodes(items)
    } else {
      isMounted.current = true
    }
  }, [page, pagedEpisodeData])

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

      {displayedEpisodes}

      <Pagination
        total={pagedEpisodeData.length}
        withEdges
        color="giBlue"
        position="center"
        mt="xl"
        size="lg"
        page={page}
        onChange={setPage}
        getItemAriaLabel={(page) => {
          switch (page) {
            case "dots":
              return "Dots"
            case "prev":
              return "Previous page"
            case "next":
              return "Next page"
            case "first":
              return "First page"
            case "last":
              return "Last page"
            default:
              return `Page ${page}`
          }
        }}
      />
    </Container>
  )
}
