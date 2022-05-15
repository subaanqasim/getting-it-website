import React from "react"
import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core"
import { Link } from "gatsby"
import { ArrowDown } from "tabler-icons-react"

const HeroImage = React.lazy(() => import("../components/Hero3DImage"))

const BREAKPOINT = "@media (max-width: 768px)"

const useStyles = createStyles((theme) => ({
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "95vh",
    // backgroundColor:
    //   theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

    "&::before": {
      content: '""',
      backgroundImage:
        "linear-gradient(90deg, rgba(16,17,19,1) 0%, rgba(16,17,19,1) 40%, rgba(0,0,0,0) 85%)",
      position: "absolute",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
      pointerEvents: "none",
      zIndex: 1,

      "@media (max-width: 960px)": {
        background: "rgba(16, 17, 19, 0.85)",
      },

      [BREAKPOINT]: {
        pointerEvents: "all",
      },
    },
  },

  inner: {
    position: "relative",
    maxWidth: 720,
    zIndex: 2,
    pointerEvents: "none",
    // paddingTop: "10rem",
    // paddingBottom: "12rem",

    // [BREAKPOINT]: {
    //   paddingTop: "5rem",
    //   paddingBottom: "5rem",
    // },
  },

  overText: {
    textTransform: "uppercase",
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    fontWeight: 700,
    letterSpacing: "0.75px",
    marginBottom: "1rem",
    pointerEvents: "all",
    // color: theme.colors.dark[0],
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: 64,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    pointerEvents: "all",
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 40,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 20,
    maxWidth: 700,
    pointerEvents: "all",

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
    pointerEvents: "all",

    // "&:hover": {
    //   backgroundImage: `linear-gradient(45deg, ${theme.colors.blue[6]} 0%, ${theme.colors.pink[6]} 100%)`,
    //   backgroundColor: theme.colors.giPink,
    // },

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
      width: "100%",
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

  link: {
    [BREAKPOINT]: {
      flex: 1,
    },
  },

  arrow: {
    strokeWidth: "1px",
    alignSelf: "center",
    position: "absolute",
    bottom: "1em",
    zIndex: 2,
  },
}))

export default function HeroSection() {
  const { classes, cx } = useStyles()
  const theme = useMantineTheme()
  const isSSR = typeof window === "undefined"

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container size="lg" className={classes.wrapper}>
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
            what makes them interesting, so that we can expand our horizons and
            further our understanding of the world and people around us.
          </Text>

          <Group className={classes.controls}>
            <Link to="/episodes" className={classes.link}>
              <Button
                // style={{width:}}
                className={classes.control}
                size="xl"
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
        <ArrowDown size={48} className={classes.arrow} />
      </Container>
    </div>
  )
}
