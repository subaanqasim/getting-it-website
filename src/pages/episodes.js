import { Box, Container, Divider, Title, createStyles } from "@mantine/core"
import React from "react"
import { Microphone } from "tabler-icons-react"
import Layout from "../components/global/Layout"

// const useStyles = createStyles((theme) => ({
//   title: {
//     fontSize: theme.other.fontSizesLarge[1],

//     [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
//       fontSize: theme.other.fontSizesSmall[1],
//     },
//   },
// }))

export default function episodes() {
  // const { classes } = useStyles()

  return (
    <Layout>
      <Container size="xl" mt="8em" style={{ textAlign: "center" }}>
        <Divider
          my="xs"
          labelPosition="center"
          label={
            <>
              <Microphone size={12} />
              <Box ml={5} style={{ fontSize: "1rem" }}>
                All of our episodes in one place
              </Box>
            </>
          }
        />
        <Title
          order={1}
          // className={classes.title}
        >
          Episodes
        </Title>
      </Container>
    </Layout>
  )
}
