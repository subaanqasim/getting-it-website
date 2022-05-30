import { createStyles } from "@mantine/core"

export const HEADER_HEIGHT = 60

export default createStyles((theme) => ({
  navWrapper: {
    position: "fixed",
    top: "1em",
    left: 0,
    right: 0,
    zIndex: 3,
  },

  root: {
    position: "relative",
    zIndex: 2,
    border: "none",
    backgroundColor: "transparent",
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
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[7], 0.75)
        : theme.fn.rgba(theme.colors.gray[1], 0.75),
    borderRadius: theme.radius.lg,
    backdropFilter: "blur(12px)",
    padding: "0 1em",
    boxShadow: theme.shadows.lg,

    [theme.fn.smallerThan("sm")]: {
      margin: "0 0.5em",
    },
  },

  links: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,

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
      // color:
      //   theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 1 : 9],
    },
  },

  searchIcon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",

    [theme.fn.smallerThan("sm")]: {
      marginLeft: "auto",
      marginRight: "16px",
    },
  },
}))
