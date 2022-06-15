import React from "react"
import { Container } from "@mantine/core"
import Heading1 from "./Heading1/Heading1"
import Spline from "@splinetool/react-spline"

export function Spline3D({ scene }) {
  return (
    <Spline
      className=""
      scene={scene}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        maxHeight: "75vh",
        objectFit: "contain",
        marginTop: "8em",
      }}
    />
  )
}

export default function PageHeader({
  title,
  subtitle,
  subtitleIcon,
  subtitlePosition = "center",
  spline,
}) {
  // const isSSR = typeof window === "undefined"

  return (
    <header>
      <Container
        size="xl"
        mt="8em"
        style={{
          textAlign: "center",
          minHeight: "calc(30vh - 8em)", // height without 3d hero image
          // minHeight: "calc(80vh - 8em)", // height with 3d hero image
        }}
      >
        <Heading1
          title={title}
          subtitle={subtitle}
          subtitleIcon={subtitleIcon}
          subtitlePosition={subtitlePosition}
        />
        {/* {!isSSR && (
          <React.Suspense fallback={<div />}>
            <Spline3D scene={spline} />
          </React.Suspense>
        )} */}
      </Container>
    </header>
  )
}
