import React, { useState } from "react"
import { Container, Text, Button, Modal } from "@mantine/core"
import { Link } from "gatsby"
import { ArrowDown } from "tabler-icons-react"
import { motion } from "framer-motion"
import PodcastLinksGrid from "../PodcastLinksGrid/PodcastLinksGrid"
import useStyles from "./HeroSection.styles"
import {
  animHeroTextContainer,
  animHeroItem,
  animHeroArrow,
} from "../../utils/animations"

const HeroImage = React.lazy(() => import("./Hero3dImage/Hero3DImage"))

export default function HeroSection({ handleScroll }) {
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
              {/* <HeroImage className={classes.heroImg} /> */}
            </React.Suspense>
          )}

          <motion.div
            className={classes.inner}
            variants={animHeroTextContainer}
            initial="initial"
            animate="animate"
          >
            <Text
              className={classes.overText}
              variant="gradient"
              gradient={{ from: "gray", to: "dark", deg: 45 }}
              component={motion.div}
              variants={animHeroItem}
            >
              Getting It
            </Text>
            <motion.h1 className={classes.title} variants={animHeroItem}>
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
            </motion.h1>

            <Text
              className={classes.description}
              color="dimmed"
              component={motion.div}
              variants={animHeroItem}
            >
              We explore topics both familiar and unfamiliar to us to find out
              what makes them interesting, so that we can expand our horizons
              and further our understanding of the world and people around us.
            </Text>

            <motion.div className={classes.controls} variants={animHeroItem}>
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
            </motion.div>
          </motion.div>

          <motion.div
            variants={animHeroArrow}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            className={classes.arrow}
            onClick={handleScroll}
          >
            <ArrowDown size={48} style={{ strokeWidth: 1 }} />
          </motion.div>

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
