import React from "react"
import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const BREAKPOINT = "@media (max-width: 768px)"

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    // backgroundColor:
    //   theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 80,
    paddingBottom: 120,
    maxWidth: 720,

    [BREAKPOINT]: {
      paddingBottom: 60,
      paddingTop: 60,
    },
  },

  overText: {
    textTransform: "uppercase",
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    fontWeight: 700,
    letterSpacing: "0.75px",
    marginBottom: "1rem",
    // color: theme.colors.dark[0],
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 20,
    maxWidth: 700,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    // "&:hover": {
    //   backgroundImage: `linear-gradient(45deg, ${theme.colors.blue[6]} 0%, ${theme.colors.pink[6]} 100%)`,
    //   backgroundColor: theme.colors.giPink,
    // },

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  githubControl: {
    borderWidth: 2,
    borderColor: theme.colors.gray[1],
    backgroundColor: "transparent",
    color: theme.colors.gray[1],

    "&:hover": {
      backgroundColor: `${theme.colors.dark[4]} !important`,
    },
  },
}))

export default function Home() {
  const { classes, cx } = useStyles()
  const theme = useMantineTheme()

  return (
    <Layout>
      <Container size="lg">
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
            what makes them interesting, so that we can expand our horizons and
            further our understanding of the world and people around us.
          </Text>

          <Group className={classes.controls}>
            <Link to="/episodes">
              <Button
                size="xl"
                className={classes.control}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
              >
                Listen now
              </Button>
            </Link>

            <Button
              component="a"
              href="#"
              size="xl"
              variant="outline"
              className={cx(classes.control, classes.githubControl)}
            >
              Subscribe
            </Button>
          </Group>
        </div>
      </Container>
    </Layout>
  )
}
