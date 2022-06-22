import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Divider, Text } from "@mantine/core"
import MdxTitle from "./MdxTitle/MdxTitle"
import GatsbyLink from "./GatsbyLink/GatsbyLink"
import MdxBlockquote from "./MdxBlockquote"
import ShowNotesBoiler from "../../../copy/showNotes.mdx"
import PodcastLinksModal from "../../PodcastLinksGrid/PodcastLinksModal"
import HostCard from "../../TheHosts/HostCard/HostCard"

export const components = {
  ShowNotesBoiler: () => <ShowNotesBoiler />,
  PodcastLinksModal: (props) => <PodcastLinksModal {...props} />,
  HostCard: (props) => <HostCard {...props} />,
  h1: (props) => <MdxTitle order={1} mt="1.25em" {...props} />,
  h2: (props) => <MdxTitle order={2} mt="1.25em" {...props} />,
  h3: (props) => <MdxTitle order={3} mt="1.25em" {...props} />,
  h4: (props) => <MdxTitle order={4} mt="1.25em" {...props} />,
  h5: (props) => <MdxTitle order={5} mt="1.25em" {...props} />,
  h6: (props) => <MdxTitle order={6} mt="1.25em" {...props} />,
  p: (props) => <p {...props} style={{ lineHeight: 1.7 }} />,
  hr: () => <Divider size="sm" my="lg" />,
  blockquote: ({ children }) => <MdxBlockquote>{children}</MdxBlockquote>,

  ul: (props) => (
    <ul
      {...props}
      style={{ lineHeight: 1.65, marginBottom: 20, marginTop: 10 }}
    />
  ),

  li: (props) => <li {...props} style={{ marginTop: 4 }} />,

  a: ({ href, children }) => {
    const replaced = href.replace("https://gettingit.co.uk", "")

    if (!replaced.startsWith("mailto")) {
      if (!replaced.startsWith("http") && replaced.trim().length > 0) {
        return <GatsbyLink to={replaced}>{children}</GatsbyLink>
      }
    }

    return (
      <Text component="a" variant="link" target="_blank" href={href}>
        {children}
      </Text>
    )
  },
}

export default function MdxProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
