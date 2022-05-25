import React from "react"
import { Card, Text, Group, Title } from "@mantine/core"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import EpisodeMetadata from "../EpisodeMetadata/EpisodeMetadata"
import useStyles from "./EpisodeCard.styles"

export default function EpisodeCard({
  tags,
  title,
  duration,
  pubDate,
  epNum,
  embedURL,
  excerpt,
  img,
  slug,
}) {
  const { classes } = useStyles()

  return (
    <Card
      withBorder
      radius="md"
      p={0}
      mt="2em"
      className={classes.card}
      shadow="md"
    >
      <Group spacing={0} className={classes.group}>
        <Link to={`/episodes/${slug}`} className={classes.img}>
          <GatsbyImage image={img} alt="" style={{ height: "100%" }} />
        </Link>
        <div className={classes.body}>
          <Title
            component={Link}
            to={`/episodes/${slug}`}
            order={3}
            className={classes.title}
          >
            {title}
          </Title>

          <EpisodeMetadata
            tags={tags}
            duration={duration}
            epNum={epNum}
            pubDate={pubDate}
          />

          <Text mb="md" size="sm">
            {excerpt}
          </Text>

          {/* <iframe
            title={title}
            style={{ borderRadius: "12px" }}
            src={`${embedURL}?utm_source=generator&theme=0`}
            width="100%"
            height="152px"
            frameBorder="0"
            allowFullScreen=""
            allow="encrypted-media *; fullscreen; picture-in-picture"
          ></iframe> */}
        </div>
      </Group>
    </Card>
  )
}
