import { Blockquote } from "@mantine/core"
import React from "react"

export default function MdxBlockquote({ children }) {
  const arrayChildren = React.Children.toArray(children)

  const quote =
    arrayChildren.length > 1 ? arrayChildren.slice(0, -1) : arrayChildren

  const citation = arrayChildren.length > 1 ? arrayChildren.pop() : ""

  return (
    <Blockquote
      cite={citation ? `– ${citation.props.children}` : ""}
      color="giOrange"
    >
      {quote.map((child, i) => (
        <div
          style={{ marginBottom: i === quote.length - 1 ? "0" : "0.8em" }}
          key={i}
        >
          {child.props.children}
        </div>
      ))}
    </Blockquote>
  )
}
