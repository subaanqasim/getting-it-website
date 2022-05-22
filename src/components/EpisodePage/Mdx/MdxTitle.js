import React from "react"
import { createStyles, Title } from "@mantine/core"

const useStyles = createStyles((theme) => ({
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

export default function MdxTitle({ id, children, order, ...others }) {
  const { classes } = useStyles()

  const getClassName = (order) => {
    if (order === 1) {
      return classes.title1
    }
    if (order === 2) {
      return classes.title2
    }
    if (order === 3) {
      return classes.title3
    }
    if (order === 4) {
      return classes.title4
    }
    if (order === 5) {
      return classes.title5
    }
    if (order === 6) {
      return classes.title6
    }
  }

  if (order === 1) {
    return (
      <Title order={1} className={getClassName(order)}>
        {children}
      </Title>
    )
  }

  return (
    <div id={id}>
      <Title className={getClassName(order)} order={order} {...others}>
        <a className={classes.link} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </div>
  )
}
