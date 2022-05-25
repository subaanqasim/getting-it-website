import { createStyles } from "@mantine/core"

export default createStyles((theme) => ({
  heroImg: {
    display: "block",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "-25%",
    width: "100%",
    objectFit: "contain",

    "@media (max-width: 960px)": {
      // display: "none !important",
      left: 0,
      right: 0,
      width: "100%",
    },
  },
}))
