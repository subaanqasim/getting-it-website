import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[1],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[1],
    },
  },
  titleSmall: {
    fontSize: theme.other.fontSizesLarge[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[2],
    },
  },
}))
