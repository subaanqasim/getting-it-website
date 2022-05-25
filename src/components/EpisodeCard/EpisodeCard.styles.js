import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Montserrat, ${theme.fontFamily}`,
    lineHeight: 1.2,
    fontSize: "22px",
    textDecoration: "none",

    "&:hover": {
      color: theme.colors.giOrange[4],
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: "20px",
    },
  },

  body: {
    padding: theme.spacing.md,
    width: "100%",
  },

  group: {
    flexWrap: "nowrap",

    [theme.fn.smallerThan("xs")]: {
      flexWrap: "wrap",
    },
  },

  img: {
    maxWidth: "35%",
    alignSelf: "stretch",

    [theme.fn.smallerThan("xs")]: {
      maxWidth: "100%",
      maxHeight: "350px",
    },
  },
}))
