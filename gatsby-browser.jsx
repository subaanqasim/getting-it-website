const { MotionConfig } = require("framer-motion")
const React = require("react")
const { CookiesProvider } = require("react-cookie")
const SearchProvider = require("./src/components/global/SearchProvider").default
const Layout = require("./src/components/global/Layout").default
const ThemeProvider = require("./src/components/global/ThemeProvider").default

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
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
