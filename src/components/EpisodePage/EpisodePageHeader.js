import React from "react"
import { Container, createStyles } from "@mantine/core"
import Heading1 from "../Heading1"
import { GatsbyImage } from "gatsby-plugin-image"
import EpisodeMetadata from "../EpisodeMetadata"

const useStyles = createStyles((theme) => ({
  icon: {
    strokeWidth: "1.5px",
  },

  header: {
    // minHeight: "calc(70vh - 8em)",
    paddingTop: "8em",
    paddingBottom: "3em",
    position: "relative",
    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(0deg, rgba(16,17,19,1) 0%, rgba(16,17,19,0) 50%, rgba(16,17,19,0) 60%, rgba(16,17,16,1) 100%)"
        : "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",

    [theme.fn.smallerThan("sm")]: {
      paddingTop: "6em",
    },
  },

  backgroundImage: {
    position: "absolute !important",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    opacity: 0.3,
  },
}))

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
