import React from "react"
import { Link } from "gatsby"
import { Text } from "@mantine/core"
import { ArrowLeft, ArrowRight } from "tabler-icons-react"
import useStyles from "./EpisodeSibling.styles"

export default function EpisodeSibling({ data, type }) {
  const { classes, cx } = useStyles()
  const iconSize = 32

  return (
    <Link
      to={`/episodes/${data.slug}`}
      className={cx(classes.control, classes[type])}
    >
      {type === "previous" && <ArrowLeft size={iconSize} />}

      <div className={classes.body}>
        <Text size="lg" align={type === "next" ? "left" : "right"}>
          {type === "next" ? "Next episode" : "Previous episode"}
        </Text>
        <Text
          color="dimmed"
          size="sm"
          align={type === "next" ? "left" : "right"}
        >
          {data.episodeTitle} – {`ep. ${data.episodeNumber}`}
        </Text>
      </div>

      {type === "next" && <ArrowRight size={iconSize} />}
    </Link>
  )
}
