import React from "react"
import { Box, Divider, Title } from "@mantine/core"
import useStyles from "./Heading2.styles"

export default function Heading2({
  title,
  subtitle,
  subtitleIcon,
  subtitlePosition = "left",
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
      <Title order={2} className={small ? classes.titleSmall : classes.title}>
        {title}
      </Title>
    </>
  )
}
