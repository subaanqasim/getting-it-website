import React from "react"
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core"
import { useBooleanToggle } from "@mantine/hooks"
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion"
import { Search } from "tabler-icons-react"
import { Link } from "gatsby"
import useStyles, { HEADER_HEIGHT } from "./Navbar.styles"

const links = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/episodes",
    label: "Episodes",
  },
  {
    link: "/articles",
    label: "Articles",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/connect",
    label: "Connect",
  },
]

export default function Navbar() {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const { classes } = useStyles()
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      activeClassName={classes.linkActive}
      onClick={() => {
        toggleOpened(false)
      }}
    >
      {link.label}
    </Link>
  ))

  return (
    <div className={classes.navWrapper}>
      <Header height={HEADER_HEIGHT} className={classes.root}>
        <Container className={classes.header} size="sm">
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 2144 2144"
            >
              <path
                d="M877.2,1623l-50.5-110.8c126.2-20.8,152.5-41.7,152.5-122.9V1375c-27.4,26.3-60.3,46.1-107.5,46.1-97.7,0-155.8-93.3-155.8-295.2S773,823,876.1,823c43.9,0,76.8,20.8,103.2,43.9V835.1h169v515.7c0,185.5-81.2,244.8-271.1,272.2ZM979.3,986.6c-13.2-12.1-27.4-20.8-49.4-20.8-30.7,0-46.1,19.8-46.1,155.8s15.4,159.1,47.2,159.1c19.8,0,34-7.7,48.3-19.8V986.6Z"
                fill="#f4a82c"
              />
              <path
                d="M1326,781.3c-56,0-95.5-35.1-95.5-87.8s39.5-85.6,95.5-85.6,95.5,35.1,95.5,85.6-38.4,87.8-95.5,87.8Zm-84.5,629.9V835.1h169v576.1Z"
                fill="#f4a82c"
              />
              <motion.path
                d="M1704.4,237.4C1956.3,428.6,2119,731.3,2119,1072c0,623.6-468.8,1047-1047,1047S25,1650.3,25,1072,493.7,25,1072,25"
                fill="none"
                stroke="#f4a82c"
                strokeMiterlimit="10"
                strokeWidth="50"
                style={{
                  pathLength,
                  rotate: -40,
                  scaleX: -1,
                }}
              />
            </svg>
          </Link>
          <Group spacing="lg" className={classes.links}>
            {items}
          </Group>
          <Search className={classes.searchIcon} />

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />

          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </div>
  )
}
