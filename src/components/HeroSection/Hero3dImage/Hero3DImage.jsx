import React from "react"
import Spline from "@splinetool/react-spline"
import useStyles from "./Hero3DImage.styles"

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
