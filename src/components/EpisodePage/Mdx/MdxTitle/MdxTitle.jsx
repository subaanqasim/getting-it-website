import React from "react"
import { Title } from "@mantine/core"
import useStyles from "./MdxTitle.styles"

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
