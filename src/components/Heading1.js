import { Box, createStyles, Divider, Title } from "@mantine/core"
import React from "react"

const useStyles = createStyles((theme) => ({
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

export default function Heading1({
  title,
  subtitle,
  subtitleIcon,
  subtitlePosition,
  small = false,
}) {
  const { classes } = useStyles()

  return (
    <>
      {subtitle && (
        <Divider
          my="xs"
          labelPosition={subtitlePosition}
          label={
            <>
              {subtitleIcon}
              <Box ml={5} style={{ fontSize: "1rem" }}>
                {subtitle}
              </Box>
            </>
          }
        />
      )}
      <Title order={1} className={small ? classes.titleSmall : classes.title}>
        {title}
      </Title>
    </>
  )
}
