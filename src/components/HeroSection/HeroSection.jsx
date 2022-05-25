import React, { useState } from "react"
import { Container, Text, Button, Group, Modal } from "@mantine/core"
import { Link } from "gatsby"
import { ArrowDown } from "tabler-icons-react"
import PodcastLinksGrid from "../PodcastLinksGrid/PodcastLinksGrid"
import useStyles from "./HeroSection.styles"

const HeroImage = React.lazy(() => import("./Hero3dImage/Hero3DImage"))

export default function HeroSection() {
  const { classes, cx } = useStyles()
  const [modalOpen, setModalOpen] = useState(false)
  const isSSR = typeof window === "undefined"

  return (
    <header>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container size="xl" className={classes.wrapper}>
          {!isSSR && (
            <React.Suspense fallback={<div />}>
              <HeroImage className={classes.heroImg} />
            </React.Suspense>
          )}

          <div className={classes.inner}>
            <Text
              className={classes.overText}
              variant="gradient"
              gradient={{ from: "gray", to: "dark", deg: 45 }}
            >
              Getting It
            </Text>
            <h1 className={classes.title}>
              The{" "}
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "giOrange", to: "orange" }}
                inherit
              >
                podcast
              </Text>{" "}
              about learning everything
            </h1>

            <Text className={classes.description} color="dimmed">
              We explore topics both familiar and unfamiliar to us to find out
              what makes them interesting, so that we can expand our horizons
              and further our understanding of the world and people around us.
            </Text>

            <Group className={classes.controls}>
              <Link to="/episodes" className={classes.link}>
                <Button
                  className={classes.control}
                  size="xl"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                >
                  Listen now
                </Button>
              </Link>

              <Button
                size="xl"
                variant="outline"
                className={cx(classes.control, classes.githubControl)}
                onClick={() => setModalOpen(true)}
              >
                Choose Platform
              </Button>
            </Group>
          </div>
          <ArrowDown size={48} className={classes.arrow} />

          <Modal
            centered
            padding="md"
            opened={modalOpen}
            overflow="inside"
            onClose={() => setModalOpen(false)}
            title="Choose wisely..."
          >
            <PodcastLinksGrid />
          </Modal>
        </Container>
      </div>
    </header>
  )
}
