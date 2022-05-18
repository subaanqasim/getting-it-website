import React from "react"
import {
  Box,
  Container,
  Divider,
  Title,
  createStyles,
  Text,
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[1],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.other.fontSizesSmall[1],
    },
  },
}))

export default function PageHeader({ title, subtitle, subtitleIcon, spline }) {
  const { classes } = useStyles()

  return (
    <header>
      <Container
        size="xl"
        mt="8em"
        style={{
          textAlign: "center",
          minHeight: "calc(80vh - 8em)",
        }}
      >
        <Divider
          my="xs"
          labelPosition="center"
          label={
            <>
              {subtitleIcon}
              <Box ml={5} style={{ fontSize: "1rem" }}>
                {subtitle}
              </Box>
            </>
          }
        />
        <Title order={1} className={classes.title}>
          {title}
        </Title>
      </Container>
    </header>
  )
}
