import React from "react"
import { Button, Paper, Text, Group, useMantineTheme } from "@mantine/core"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { useCookies } from "react-cookie"

export default function CookieConsent({ setCookiePrefs, location }) {
  const theme = useMantineTheme()
  const [cookies, setCookie] = useCookies()

  const handleClickAcceptAll = () => {
    setCookiePrefs(true)
    setCookie("giCookiePrefs", true, {
      path: "/",
      expires: new Date(2147483647000),
    })
    setCookie("giAnalytics", true, {
      path: "/",
      expires: new Date(2147483647000),
    })
    setCookie("giMarketing", true, {
      path: "/",
      expires: new Date(2147483647000),
    })
    setCookie("giPersonalisation", true, {
      path: "/",
      expires: new Date(2147483647000),
    })
    initializeAndTrack(location)
  }

  return (
    <Paper
      withBorder
      p="lg"
      radius="sm"
      shadow="md"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[2],
      })}
    >
      <Text size="md" weight={600} mb="xs">
        Allow cookies
      </Text>
      <Text size="xs">
        So the deal is, we want to spy on you. We would like to know what had
        for todays breakfast, where you live, how much do you earn and like 50
        other things. To view our website you will have to accept all cookies.
        That&apos;s all, and remember that we are watching... Just kidding — we
        just measure a few metrics to help optimise your experience of our
        website 🥰
      </Text>
      <Group position="right" mt="xs">
        <Button
          variant="default"
          size="xs"
          onClick={() => setCookiePrefs(true)}
        >
          Cookies preferences
        </Button>
        <Button
          variant={theme.colorScheme === "dark" ? "outline" : "filled"}
          color={theme.colorScheme === "dark" ? "giOrange" : "giBlue"}
          size="xs"
          onClick={handleClickAcceptAll}
        >
          Accept all
        </Button>
      </Group>
    </Paper>
  )
}
