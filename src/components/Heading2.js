import { Box, createStyles, Divider, Title } from "@mantine/core"
import React from "react"

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[1],

    [theme.fn.smallerThan("sm")]: {
      fontSize: theme.other.fontSizesSmall[1],
    },
  },
}))

export default function Heading2({
  title,
  subtitle,
  subtitleIcon,
  subtitlePosition = "left",
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
      <Title order={2} className={classes.title}>
        {title}
      </Title>
    </>
  )
}
