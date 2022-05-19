import { Box, createStyles, Divider, Title } from "@mantine/core"
import React from "react"

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[0],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[0],
    },
  },
}))

export default function Heading1({
  title,
  subtitle,
  subtitleIcon,
  subtitlePosition,
}) {
  const { classes } = useStyles()

  return (
    <>
      <Divider
        my="xs"
        labelPosition={subtitlePosition}
        label={
          subtitle && (
            <>
              {subtitleIcon}
              <Box ml={5} style={{ fontSize: "1rem" }}>
                {subtitle}
              </Box>
            </>
          )
        }
      />
      <Title order={1} className={classes.title}>
        {title}
      </Title>
    </>
  )
}
