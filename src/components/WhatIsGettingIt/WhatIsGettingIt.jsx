import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
} from "@mantine/core"
import {
  InfoCircle,
  ChartRadar,
  Bulb,
  ChartDonut,
  CircleCheck,
} from "tabler-icons-react"
import Heading2 from "../Heading2/Heading2"
import { motion } from "framer-motion"
import {
  animFadeUpInOnScroll,
  animFeatureContainer,
  animFeatureItem,
} from "../../utils/animations"
import useStyles from "./WhatIsGettingIt.styles"

const aboutFeatures = [
  {
    icon: Bulb,
    title: "Curiosity",
    description:
      "Everything is interesting if you give it a chance. Hopefully we can put this into practice and explore new topics and spark people's interest in topics that they wouldn't otherwise be exposed to.",
  },
  {
    icon: ChartDonut,
    title: "Anti-hyperspecialisation",
    description:
      "Most of us can benefit by making our rabbit holes of specialisation less deep, but far more broad. It's a lot easier to become relatively well versed in a new topic than becoming the best in a topic you're already good at.",
  },
  {
    icon: ChartRadar,
    title: "Variety",
    description:
      "From science to lifestyle design, languages to religion, plus everything in between - anything can be interesting if exposed to you through the right lens.",
  },
  {
    icon: CircleCheck,
    title: "Discipline",
    description:
      "We are committing ourselves to express our thoughts and ideas with more scrutiny, thereby developing our own thinking and communication with people of all sorts of backgrounds.",
  },
]

export default function WhatIsGettingIt() {
  const { classes } = useStyles()

  const items = aboutFeatures.map((feature) => (
    <motion.div
      key={feature.title}
      variants={animFeatureContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <motion.div variants={animFeatureItem}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{ deg: 133, from: "orange", to: "giOrange" }}
        >
          <feature.icon size={26} strokeWidth={1.25} />
        </ThemeIcon>
      </motion.div>
      <Text
        size="lg"
        mt="sm"
        weight={600}
        component={motion.p}
        variants={animFeatureItem}
      >
        {feature.title}
      </Text>
      <Text
        color="dimmed"
        size="sm"
        component={motion.p}
        variants={animFeatureItem}
      >
        {feature.description}
      </Text>
    </motion.div>
  ))

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

        <div className={classes.wrapper}>
          <Grid gutter={80}>
            <Col span={12} md={5}>
              <motion.div
                variants={animFadeUpInOnScroll}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <Title className={classes.title} order={3}>
                  Conversations where we try to understand life just a little
                  bit more
                </Title>
              </motion.div>
              <Text
                color="dimmed"
                component={motion.p}
                variants={animFadeUpInOnScroll}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                We explore topics both familiar and unfamiliar to us to find out
                what makes them interesting, so that we can expand our horizons
                and further our understanding of the world and people around us.
              </Text>

              <motion.div
                variants={animFadeUpInOnScroll}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <Button
                  variant="gradient"
                  gradient={{ deg: 133, from: "giPink", to: "giOrange" }}
                  size="lg"
                  radius="sm"
                  mt="xl"
                  component={Link}
                  to="/about"
                >
                  Learn more
                </Button>
              </motion.div>
            </Col>
            <Col span={12} md={7}>
              <SimpleGrid
                cols={2}
                spacing={30}
                breakpoints={[{ maxWidth: "xs", cols: 1 }]}
              >
                {items}
              </SimpleGrid>
            </Col>
          </Grid>
        </div>
      </Container>
    </motion.section>
  )
}
