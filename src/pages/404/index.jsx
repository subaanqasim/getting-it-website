import React from "react"
import { Title, Text, Button, Container, Group, Anchor } from "@mantine/core"
import { Link } from "gatsby"
import useStyles from "./404.styles"
import WebpageSeo from "../../components/seo/WebpageSeo"

export default function PageNotFound() {
  const { classes } = useStyles()

  return (
    <>
      <WebpageSeo title="Page Not Found" slug="404" />
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title order={1} className={classes.title}>
          Nothing to see here.
        </Title>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          className={classes.description}
        >
          The page you are trying to open does not exist. You may have mistyped
          the address, or the page has been moved to another URL. If you think
          this is a mistake{" "}
          <Anchor size="lg" href="mailto:thoughts@gettingit.co.uk">
            please get in touch.
          </Anchor>
        </Text>
        <Group position="center">
          <Button variant="outline" size="md" component={Link} to="/">
            Take me back home 🥺
          </Button>
        </Group>
      </Container>
    </>
  )
}
