import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
  },
}))
