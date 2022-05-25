import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  icon: {
    strokeWidth: "1.5px",
  },

  header: {
    // minHeight: "calc(70vh - 8em)",
    paddingTop: "8em",
    paddingBottom: "3em",
    position: "relative",
    background:
      theme.colorScheme === "dark"
        ? "linear-gradient(0deg, rgba(16,17,19,1) 0%, rgba(16,17,19,0) 50%, rgba(16,17,19,0) 60%, rgba(16,17,16,1) 100%)"
        : "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",

    [theme.fn.smallerThan("sm")]: {
      paddingTop: "6em",
    },
  },

  backgroundImage: {
    position: "absolute !important",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1,
    opacity: 0.3,
  },
}))
