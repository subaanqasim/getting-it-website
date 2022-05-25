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
import { Search } from "tabler-icons-react"
import { Link } from "gatsby"
import logo from "../../../assets/images/getting-it-logo.svg"
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
          <Link to="/">
            <img src={logo} alt="" width="40px" />
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
