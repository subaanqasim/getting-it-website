import React from "react"
import Spline from "@splinetool/react-spline"
import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  heroImg: {
    display: "block",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "-25%",
    width: "100%",
    objectFit: "contain",

    "@media (max-width: 960px)": {
      // display: "none !important",
      left: 0,
      right: 0,
      width: "100%",
    },
  },
}))

function Hero3DImage() {
  const { classes } = useStyles()

  return (
    <Spline
      className={classes.heroImg}
      scene="https://prod.spline.design/14d6JmguKQIt6MTk/scene.splinecode"
    />
  )
}

export default Hero3DImage
