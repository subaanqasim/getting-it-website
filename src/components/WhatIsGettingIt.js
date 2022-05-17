import React from "react"
import { Box, Container, createStyles, Divider, Title } from "@mantine/core"
import { InfoCircle } from "tabler-icons-react"

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: theme.other.fontSizesLarge[1],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.other.fontSizesSmall[1],
    },
  },
}))

export default function WhatIsGettingIt() {
  const { classes } = useStyles()

  return (
    <section>
      <Container size="xl" mt="8em">
        <Divider
          my="xs"
          labelPosition="left"
          label={
            <>
              <InfoCircle size={16} />
              <Box ml={5} style={{ fontSize: "1rem" }}>
                About the podcast
              </Box>
            </>
          }
        />
        <Title order={2} className={classes.title}>
          What is Getting It?
        </Title>
      </Container>
    </section>
  )
}
