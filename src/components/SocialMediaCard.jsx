import React from "react"
import { Text, Button, Paper } from "@mantine/core"

export function SocialMediaCard({ icon, title, handle, link }) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      shadow="md"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      {icon}
      <Text align="center" size="lg" weight={500} mt="md">
        {title}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {handle}
      </Text>

      <Button
        variant="default"
        fullWidth
        mt="md"
        component="a"
        href={link}
        target="_blank"
      >
        Follow
      </Button>
    </Paper>
  )
}
