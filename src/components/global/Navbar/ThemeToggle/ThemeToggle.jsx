import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import React from "react"
import { MoonStars, Sun } from "tabler-icons-react"

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors[theme.primaryColor][4]
            : theme.colors.giBlue[6],
        strokeWidth: 1.5,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[3],
        },
      })}
    >
      {colorScheme === "dark" ? (
        <Sun style={{ strokeWidth: "inherit" }} />
      ) : (
        <MoonStars style={{ strokeWidth: "inherit" }} />
      )}
    </ActionIcon>
  )
}
