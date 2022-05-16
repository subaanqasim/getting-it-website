import React from "react"
import { createStyles, Text, Container, ActionIcon, Group } from "@mantine/core"
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react"
import { Link } from "gatsby"
import logo from "../../assets/images/getting-it-logo.svg"

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    borderTop: `1.5px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: theme.fontFamily,
    marginBottom: theme.spacing.xs / 2,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[1]
        : theme.colors.gray[9],
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}))

const footerData = [
  {
    title: "Latest Episodes",
    links: [
      {
        label: "Latest 1",
        link: "#",
      },
      {
        label: "Latest 2",
        link: "#",
      },
      {
        label: "Latest 3",
        link: "#",
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        label: "Podcast episodes",
        link: "#",
      },
      {
        label: "Articles",
        link: "#",
      },
      {
        label: "About",
        link: "#",
      },
      {
        label: "Contact",
        link: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        link: "#",
      },
      {
        label: "Cookie Policy",
        link: "#",
      },
    ],
  },
]

export default function Footer() {
  const { classes } = useStyles()

  const groups = footerData.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="lg">
        <div className={classes.logo}>
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{ maxWidth: "48px", marginBottom: "8px" }}
            />
          </Link>
          <Text size="xs" color="dimmed" className={classes.description}>
            The conversation where we try to understand life just that little
            bit more.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size="lg">
        <Text color="dimmed" size="sm">
          © 2022 Getting It. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            component="a"
            href="https://www.instagram.com/gettingit_pod/"
            target="_blank"
            rel="nofollow noopener"
            size="lg"
          >
            <BrandInstagram size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.twitter.com/gettingit_pod/"
            target="_blank"
            rel="nofollow noopener"
            size="lg"
          >
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.youtube.com/channel/UCCxSzkRM86gx8CJIUK0W7_w"
            target="_blank"
            rel="nofollow noopener"
            size="lg"
          >
            <BrandYoutube size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  )
}
