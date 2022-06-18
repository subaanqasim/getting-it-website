import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  wrapper: {
    position: "sticky",
    boxSizing: "border-box",
    marginLeft: theme.spacing.lg,
    top: 120,
    right: 0,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.6,
    fontSize: theme.fontSizes.sm,
    padding: theme.spacing.xs,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    cursor: "pointer",
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    borderLeftColor:
      theme.colorScheme === "dark"
        ? theme.colors[theme.primaryColor][6]
        : theme.colors.blue[9],
    color:
      theme.colorScheme === "dark"
        ? theme.colors[theme.primaryColor][2]
        : theme.colors.blue[9],

    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.fn.rgba(theme.colors.blue[0], 0.5),
    },
  },
}))
