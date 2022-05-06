import { Global } from "@mantine/core"

import React from "react"

export default function GlobalTheme() {
  return (
    <Global
      styles={(theme) => ({
        body: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
        },
      })}
    />
  )
}
