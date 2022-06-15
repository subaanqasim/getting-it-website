import React from "react"
import Spline from "@splinetool/react-spline"
import { useMediaQuery } from "@mantine/hooks"

function Hero3DImage() {
  const isMobile = useMediaQuery("(max-width: 960px)")

  return (
    <Spline
      scene={process.env.HERO_3D}
      style={{
        position: "absolute",
        right: isMobile ? 0 : "-25%",
        objectFit: "contain",
      }}
    />
  )
}

export default Hero3DImage
