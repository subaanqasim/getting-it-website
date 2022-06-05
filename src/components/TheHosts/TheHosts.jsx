import React from "react"
import { Container } from "@mantine/core"
import { Users } from "tabler-icons-react"
import { useStaticQuery, graphql } from "gatsby"
import Heading2 from "../Heading2/Heading2"
import { motion } from "framer-motion"
import { animFadeUpInOnScroll } from "../../utils/animations"
import HostCard from "./HostCard/HostCard"

const query = graphql`
  {
    allContentfulAuthor(sort: { fields: name, order: DESC }) {
      nodes {
        id
        name
        funnyTitle
        interests
        location
        instagram
        twitter
        linkedIn
        portrait {
          gatsbyImageData(
            placeholder: BLURRED
            formats: WEBP
            cropFocus: TOP
            aspectRatio: 0.8
            resizingBehavior: FILL
          )
        }
        shortDescription {
          shortDescription
        }
      }
    }
  }
`

export default function TheHosts() {
  const {
    allContentfulAuthor: { nodes: bothData },
  } = useStaticQuery(query)

  return (
    <motion.section
      variants={animFadeUpInOnScroll}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <Container size="xl" mt="8em">
        <Heading2
          title="The Hosts"
          subtitle="A little bit about us"
          subtitleIcon={<Users size={16} />}
        />
        <HostCard hostData={bothData} />
      </Container>
    </motion.section>
  )
}
