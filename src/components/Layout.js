import React, { useState } from "react"
import { ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { useHotkeys } from "@mantine/hooks"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/900.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/700.css"
import GlobalTheme from "./GlobalTheme"

export default function Layout({ children }) {
  const [colorScheme, setColorScheme] = useState("dark")
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useHotkeys([["mod+J", () => toggleColorScheme()]])

  const myTheme = {
    colorScheme: colorScheme,
    colors: {
      giOrange: [
        "#FDEDD3",
        "#FBDCAB",
        "#F9CD87",
        "#F7C065",
        "#F5B347",
        "#F4A82C",
        "#F39D11",
        "#DE8E0C",
        "#C8800A",
        "#B47309",
        "#A26708",
        "#915D08",
      ],
      giBlue: [
        "#BBD3ED",
        "#9DC0E4",
        "#81AEDD",
        "#689ED6",
        "#518FD0",
        "#3D82CA",
        "#3376BC",
        "#2E6AA9",
        "#296098",
        "#255689",
        "#214D7B",
        "#1E466F",
        "#1B3F64",
      ],
      giPink: [
        "#F7E8EE",
        "#ECC7D6",
        "#E1AAC0",
        "#D88FAD",
        "#D0779B",
        "#C8618B",
        "#C14D7C",
        "#B43F6E",
        "#A23863",
        "#923359",
        "#832E50",
        "#762948",
        "#6A2541",
      ],
    },
    primaryColor: "giOrange",
    primaryShade: 5,
    defaultRadius: "sm",
    loader: "bars",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    headings: {
      fontFamily:
        "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      sizes: {
        h1: { fontSize: "5.6rem" },
        h2: { fontSize: "4rem" },
        h3: { fontSize: "2.8rem" },
        h4: { fontSize: "2rem" },
        h5: { fontSize: "1.4rem" },
        h6: { fontSize: "1rem" },
      },
    },
    other: {
      fontSizesLarge: [
        "5.6rem",
        "4rem",
        "2.8rem",
        "2rem",
        "1.4rem",
        "1rem",
        "0.7rem",
      ],
      fontSizesSmall: [
        "3rem",
        "2.4rem",
        "2rem",
        "1.6rem",
        "1.25rem",
        "1rem",
        "0.8rem",
      ],
    },
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      {/* Add your theme here */}
      <MantineProvider
        theme={myTheme}
        withGlobalStyles
        withNormalizeCSS
        styles={{
          Title: (theme) => ({
            root: {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[0]
                  : theme.colors.gray[9],
            },
          }),
        }}
      >
        <GlobalTheme />
        <Navbar />
        {children}
        <Footer fixed={true} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
