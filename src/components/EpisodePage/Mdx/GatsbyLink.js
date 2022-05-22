import React from "react"
import { Link } from "gatsby"
import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}))

export default function GatsbyLink(props) {
  const { classes } = useStyles()
  return <Link className={classes.link} {...props} />
}
