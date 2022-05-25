import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    textDecoration: "none",
    color: "inherit",
    // Todo: add hover to show anchor icon (then clicking icon to copy)
  },

  title1: {
    fontSize: theme.other.fontSizesLarge[0],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[0],
    },
  },
  title2: {
    fontSize: theme.other.fontSizesLarge[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[2],
    },
  },
  title3: {
    fontSize: theme.other.fontSizesLarge[3],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[3],
    },
  },
  title4: {
    fontSize: theme.other.fontSizesLarge[4],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[4],
    },
  },
  title5: {
    fontSize: theme.other.fontSizesLarge[5],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[5],
    },
  },
  title6: {
    fontSize: theme.other.fontSizesLarge[6],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[6],
    },
  },
}))
