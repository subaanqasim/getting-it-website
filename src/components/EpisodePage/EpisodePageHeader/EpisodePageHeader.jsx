import React from "react"
import { Container } from "@mantine/core"
import Heading1 from "../../Heading1/Heading1"
import { GatsbyImage } from "gatsby-plugin-image"
import EpisodeMetadata from "../../EpisodeMetadata/EpisodeMetadata"
import useStyles from "./EpisodePageHeader.styles"

export default function EpisodePageHeader({ epData }) {
  const { classes } = useStyles()
  const {
    episodeTitle,
    audioEmbedLink,
    metadata,
    duration,
    episodeNumber,
    datePublished,
    thumbnail,
  } = epData

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div style={{ marginBottom: "0.5em" }}>
          <Heading1 title={episodeTitle} small={true} />
        </div>

        <EpisodeMetadata
          mt={0}
          textColor=""
          textSize="md"
          badgeSize="lg"
          tags={metadata.tags}
          duration={duration}
          epNum={episodeNumber}
          pubDate={datePublished}
        />

        <div>
          <iframe
            title={episodeTitle}
            style={{ borderRadius: "12px" }}
            src={`${audioEmbedLink}?utm_source=generator&theme=0`}
            width="100%"
            height="152px"
            frameBorder="0"
            allowFullScreen=""
            allow="encrypted-media *; fullscreen; picture-in-picture"
          ></iframe>
        </div>

        <GatsbyImage
          image={thumbnail.gatsbyImageData}
          alt=""
          className={classes.backgroundImage}
        />
      </Container>
    </header>
  )
}
