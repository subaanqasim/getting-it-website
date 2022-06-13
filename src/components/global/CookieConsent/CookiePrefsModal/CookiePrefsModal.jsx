import React from "react"
import { Modal } from "@mantine/core"
import { Link } from "gatsby"
import { Card, Group, Switch, Text } from "@mantine/core"
import { useCookies } from "react-cookie"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import useStyles from "./CookiePrefsModal.styles"

const data = [
  {
    title: "Essential",
    description:
      "These items are required to enable basic website functionality.",
    disabled: true,
    cookieName: null,
  },
  {
    title: "Personalisation",
    description:
      "These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.",
    disabled: false,
    cookieName: "giPersonalisation",
  },
  {
    title: "Analytics",
    description:
      "These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn't collect information that identifies a visitor.",
    disabled: false,
    cookieName: "giAnalytics",
  },
]

export default function CookiePrefsModal({ open, setOpen, location }) {
  const { classes } = useStyles()
  const [cookies, setCookie] = useCookies()

  const items = data.map((item) => (
    <Group
      key={item.title}
      position="apart"
      className={classes.item}
      noWrap
      spacing="xl"
    >
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch
        onLabel="ON"
        offLabel="OFF"
        aria-label={item.title}
        className={classes.switch}
        size="lg"
        disabled={item.disabled}
        checked={
          item.title === "Essential"
            ? true
            : cookies[item.cookieName] === "true"
        }
        onChange={(e) => {
          setCookie(item.cookieName, e.currentTarget.checked, {
            path: "/",
            expires: new Date(2147483647000),
          })
        }}
      />
    </Group>
  ))

  return (
    <>
      <Modal
        centered
        title="Privacy Preference Center"
        padding="md"
        opened={open}
        overflow="inside"
        onClose={() => {
          setOpen(false)
          setCookie("giCookiePrefs", true, {
            path: "/",
            expires: new Date(2147483647000),
          })
          initializeAndTrack(location)
        }}
      >
        <Card radius="sm" className={classes.card}>
          <Text size="lg" className={classes.title} weight={600}>
            Manage Cookies by Category
          </Text>
          <Text size="xs" color="dimmed" mt={3} mb="xl">
            When you visit websites, they may store or retrieve data in your
            browser. This storage is often necessary for the basic functionality
            of the website. Privacy is important to us, so you have the option
            of disabling certain types of storage that may not be necessary for
            the basic functioning of the website. Blocking categories may impact
            your experience on the website. You can change these preferences at
            any time by{" "}
            <Text variant="link" size="xs" component={Link} to="/cookie-policy">
              visiting the cookie policy.
            </Text>
          </Text>
          {items}
        </Card>
      </Modal>
    </>
  )
}
