import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    // backgroundColor:
    //   theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,

    "&::before": {
      content: '""',
      backgroundImage:
        theme.colorScheme === "dark"
          ? "linear-gradient(90deg, rgba(16,17,19,1) 0%, rgba(16,17,19,1) 40%, rgba(0,0,0,0) 85%)"
          : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 85%)",
      position: "absolute",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
      pointerEvents: "none",
      zIndex: 1,

      "@media (max-width: 960px)": {
        background:
          theme.colorScheme === "dark"
            ? "rgba(16, 17, 19, 0.85)"
            : "rgba(255, 255, 255, 0.85)",
      },

      [theme.fn.smallerThan("xs")]: {
        pointerEvents: "all",
      },
    },
  },

  inner: {
    position: "relative",
    maxWidth: 800,
    zIndex: 2,
    pointerEvents: "none",
    // paddingTop: "10rem",
    // paddingBottom: "12rem",

    // [theme.fn.smallerThan("xs")]: {
    //   paddingTop: "5rem",
    //   paddingBottom: "5rem",
    // },
  },

  overText: {
    textTransform: "uppercase",
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    fontSize: "20px",
    fontWeight: 700,
    letterSpacing: "0.75px",
    marginBottom: "1em",
    pointerEvents: "all",
    // color: theme.colors.dark[0],

    [theme.fn.smallerThan("xs")]: {
      fontSize: "unset",
    },
  },

  title: {
    fontFamily: theme.fontFamily,
    fontSize: theme.headings.sizes.h1.fontSize,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    pointerEvents: "all",
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 48,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 20,
    maxWidth: 700,
    pointerEvents: "all",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [theme.fn.smallerThan("xs")]: {
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

    [theme.fn.smallerThan("xs")]: {
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
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  arrow: {
    alignSelf: "center",
    position: "absolute",
    bottom: "60px",
    zIndex: 2,
    cursor: "pointer",
  },
}))
