import React from "react"
import {
  createStyles,
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
import logo from "../../assets/images/getting-it-logo.svg"

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 2,
    border: "none",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[1]
        : theme.colors.gray[8],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
    // letterSpacing: "0.02em",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}))

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
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header} size="xl">
        <Link to="/">
          <img src={logo} alt="" style={{ width: "40px" }} />
        </Link>
        <Group spacing="lg" className={classes.links}>
          {items}
        </Group>
        <Search />

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}
