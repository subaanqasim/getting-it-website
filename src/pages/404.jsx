import React from "react"
import {
  Title,
  Text,
  Button,
  Container,
  Group,
  Anchor,
  createStyles,
} from "@mantine/core"
import { Link } from "gatsby"
import WebpageSeo from "../components/Seo/WebpageSeo"

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: theme.fontFamily,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}))

export default function PageNotFound() {
  const { classes } = useStyles()

  return (
    <>
      <WebpageSeo title="Page Not Found" slug="404" />
      <main>
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
            The page you are trying to open does not exist. You may have
            mistyped the address, or the page has been moved to another URL. If
            you think this is a mistake{" "}
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
      </main>
    </>
  )
}
