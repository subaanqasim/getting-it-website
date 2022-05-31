import React, { useEffect, useState, useRef } from "react"
import {
  Chip,
  Chips,
  Container,
  Kbd,
  Pagination,
  TextInput,
  Text,
} from "@mantine/core"
import { useStaticQuery, graphql } from "gatsby"
import EpisodeCard from "./EpisodeCard/EpisodeCard"
import getTagsList from "../utils/getTagsList"
import { Search, CircleX } from "tabler-icons-react"
import { useOs } from "@mantine/hooks"
import getPages from "../utils/getPages"
import { motion } from "framer-motion"
import { animEpisodeSearch, animEpisodeTags } from "../utils/animations"

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
  const [searchQuery, setSearchQuery] = useState("")
  const isMounted = useRef(false)
  const ITEMS_PER_PAGE = 5

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
      const filtered = allEpisodeData.filter((ep) =>
        searchQuery
          ? ep.episodeTitle
              .toLowerCase()
              .includes(searchQuery.toLowerCase().trim())
          : true
      )
      setPagedEpisodeData(getPages(filtered, ITEMS_PER_PAGE))
      setPage(1)
    } else {
      const filtered = allEpisodeData.filter((ep) =>
        searchQuery
          ? ep.episodeTitle
              .toLowerCase()
              .includes(searchQuery.toLowerCase().trim()) &&
            ep.metadata.tags.some((tag) => tag.name === filter)
          : ep.metadata.tags.some((tag) => tag.name === filter)
      )
      setPagedEpisodeData(getPages(filtered, ITEMS_PER_PAGE))
      setPage(1)
    }
  }, [filter, allEpisodeData, searchQuery])

  // Checks if component has rendered at least once and ensures pagedEpisodeData state variable has been populated
  useEffect(() => {
    if (isMounted.current && pagedEpisodeData.length > 0) {
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
      const noEpisodes = (
        <Text mt="xl" size="xl" align="center">
          Oops, no episodes found :(
        </Text>
      )
      setDisplayedEpisodes(noEpisodes)
    }
  }, [page, pagedEpisodeData])

  const rightSection = searchQuery ? (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 180, color: "#C1C2C5" }}
      onClick={() => setSearchQuery("")}
      style={{
        strokeWidth: 1.5,
        color: "#909296",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CircleX />
    </motion.div>
  ) : (
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
      <motion.div
        variants={animEpisodeSearch}
        initial="initial"
        animate="animate"
      >
        <TextInput
          type="search"
          size="md"
          placeholder="Search all episodes"
          my="lg"
          mx="auto"
          style={{ maxWidth: 850 }}
          icon={<Search size={16} />}
          rightSection={rightSection}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </motion.div>

      <motion.div
        variants={animEpisodeTags}
        animate="animate"
        initial="initial"
      >
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
      </motion.div>

      {displayedEpisodes}

      {displayedEpisodes.length > 0 && (
        <motion.div layout>
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
        </motion.div>
      )}
    </Container>
  )
}
