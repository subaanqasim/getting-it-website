import React from "react"
import { Text, Container, ActionIcon, Group } from "@mantine/core"
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react"
import { Link, graphql, useStaticQuery } from "gatsby"
import logo from "../../../assets/images/getting-it-logo.svg"
import useStyles from "./Footer.styles"

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
    <div key={ep.id} className={classes.episodeLinks}>
      <Text
        className={classes.link}
        component={Link}
        to={`/episodes/${ep.slug}`}
      >
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
            <img
              src={logo}
              alt=""
              width="48px"
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
