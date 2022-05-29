import React from "react"
import { Container } from "@mantine/core"
import { InfoCircle } from "tabler-icons-react"
import Heading2 from "./Heading2/Heading2"
import { motion } from "framer-motion"
import { animFadeUpInOnScroll } from "../utils/animations"

export default function WhatIsGettingIt() {
  return (
    <motion.section
      variants={animFadeUpInOnScroll}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <Container size="xl" mt="8em">
        <Heading2
          title="What is Getting It?"
          subtitle="About the Podcast"
          subtitleIcon={<InfoCircle size={16} />}
        />
      </Container>
    </motion.section>
  )
}
