import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Divider, Text } from "@mantine/core"
import MdxTitle from "./MdxTitle"
import GatsbyLink from "./GatsbyLink"
import MdxBlockquote from "./MdxBlockquote"
import ShowNotesBoiler from "../../../copy/showNotes.mdx"

export const components = {
  ShowNotesBoiler: () => <ShowNotesBoiler />,
  h1: (props) => <MdxTitle order={1} {...props} />,
  h2: (props) => <MdxTitle order={2} {...props} />,
  h3: (props) => <MdxTitle order={3} {...props} />,
  h4: (props) => <MdxTitle order={4} {...props} />,
  h5: (props) => <MdxTitle order={5} {...props} />,
  h6: (props) => <MdxTitle order={6} {...props} />,
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
