const React = require("react")
const SearchProvider = require("./src/components/global/SearchProvider").default
const Layout = require("./src/components/global/Layout").default
const ThemeProvider = require("./src/components/global/ThemeProvider").default
const { MotionConfig } = require("framer-motion")
const { CookiesProvider } = require("react-cookie")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <SearchProvider>
        <MotionConfig reducedMotion="user">
          <CookiesProvider>{element}</CookiesProvider>
        </MotionConfig>
      </SearchProvider>
    </ThemeProvider>
  )
}
