import React, { useState, useEffect } from "react"
import { Box, Text, Group } from "@mantine/core"
import Slugger from "github-slugger"
import { ListSearch } from "tabler-icons-react"
import useStyles from "./TableOfContents.styles"
import { useRef } from "react"

const OFFSET_TOP = 130

function getActiveElement(rects) {
  if (rects.length === 0) {
    return -1
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc
      }

      return {
        index,
        position: item.y - OFFSET_TOP - 60,
      }
    },
    { index: 0, position: rects[0].y }
  )

  return closest.index
}

export default function TableOfContents({
  notesHeadings,
  transcript,
  location,
}) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState(0)
  const headingDivs = useRef([])
  const slugger = new Slugger()
  const filteredHeadings = notesHeadings.filter((heading) => heading.depth > 1)

  const allLinks = [
    ...filteredHeadings,
    {
      value: "Support the Getting It Podcast",
      depth: 2,
    },
  ]

  if (transcript) {
    allLinks.push({
      value: "Transcript",
      depth: 2,
    })
  }

  useEffect(() => {
    slugger.reset()
    headingDivs.current = allLinks.map((heading) =>
      document.getElementById(slugger.slug(heading.value))
    )
  }, [notesHeadings])

  const handleScroll = () => {
    setActive(
      getActiveElement(
        headingDivs.current.map((d) => d.getBoundingClientRect())
      )
    )
  }

  useEffect(() => {
    setActive(
      getActiveElement(
        headingDivs.current.map((d) => d.getBoundingClientRect())
      )
    )
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (allLinks.length === 0) {
    return null
  }

  const items = allLinks.map((item, index) => {
    const slug = slugger.slug(item.value)
    return (
      <Box
        key={item.value}
        component="a"
        href={`#${slug}`}
        onClick={(e) => {
          e.preventDefault()
          window.scrollBy({
            top:
              headingDivs.current[index].getBoundingClientRect().top -
              OFFSET_TOP,
            behavior: "smooth",
          })
        }}
        className={cx(classes.link, { [classes.linkActive]: active === index })}
        sx={(theme) => ({ paddingLeft: item.depth * theme.spacing.md })}
      >
        {item.value}
      </Box>
    )
  })

  return (
    <nav className={classes.wrapper}>
      <Group mb="md">
        <ListSearch size={18} />
        <Text>Table of contents</Text>
      </Group>
      {items}
    </nav>
  )
}
