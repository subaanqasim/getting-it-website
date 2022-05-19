import React from "react"
import { createStyles, Text, Container, ActionIcon, Group } from "@mantine/core"
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
    gap: "2em",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    maxWidth: 400,
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

  episodeLinks: {
    marginBottom: "0.5em",
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
    title: "Explore",
    links: [
      {
        label: "All episodes",
        link: "/episodes",
      },
      {
        label: "Articles",
        link: "/articles",
      },
      {
        label: "About",
        link: "/about",
      },
      {
        label: "Contact",
        link: "/connect",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        label: "Cookie Policy",
        link: "/cookie-policy",
      },
    ],
  },
]

const query = graphql`
  {
    allContentfulPodcasts(
      sort: { fields: datePublished, order: DESC }
      limit: 3
    ) {
      nodes {
        id
        episodeTitle
        episodeNumber
        datePublished(formatString: "MMM DD, YYYY")
        slug
      }
    }
  }
`

export default function Footer() {
  const { classes } = useStyles()
  const {
    allContentfulPodcasts: { nodes: episodeData },
  } = useStaticQuery(query)

  const latestEpisodesLinks = episodeData.map((ep) => (
    <div className={classes.episodeLinks}>
      <Text key={ep.id} className={classes.link} component={Link} to={ep.slug}>
        {ep.episodeTitle}
      </Text>
      <Text
        mb
        size="xs"
        color="dimmed"
      >{`${ep.datePublished} — ep. ${ep.episodeNumber}`}</Text>
    </div>
  ))

  const groups = footerData.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link}
        to={link.link}
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
      <Container className={classes.inner} size="xl">
        <div className={classes.logo}>
          <Link to="/">
            <StaticImage
              layout="fixed"
              loading="eager"
              placeholder="tracedSVG"
              src="../../assets/images/getting-it-logo.svg"
              alt=""
              width={48}
              aspectRatio={1 / 1}
              style={{ marginBottom: "8px" }}
            />
          </Link>
          <Text size="xs" color="dimmed" className={classes.description}>
            The conversation where we try to understand life just that little
            bit more.
          </Text>
        </div>
        <div className={classes.groups}>
          <div className={classes.wrapper}>
            <Text className={classes.title}>Latest Episodes</Text>
            {latestEpisodesLinks}
          </div>
          {groups}
        </div>
      </Container>

      <Container className={classes.afterFooter} size="xl">
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
