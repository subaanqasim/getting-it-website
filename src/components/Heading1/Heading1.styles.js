import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[0],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[0],
    },
  },

  titleSmall: {
    fontSize: theme.other.fontSizesLarge[1],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[1],
    },
  },
}))
