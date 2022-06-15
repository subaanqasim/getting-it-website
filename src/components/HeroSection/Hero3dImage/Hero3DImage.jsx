import React from "react"
import Spline from "@splinetool/react-spline"
import useStyles from "./Hero3DImage.styles"

function Hero3DImage() {
  const { classes } = useStyles()

  return <Spline className={classes.heroImg} scene={process.env.HERO_3D} />
}

export default Hero3DImage
