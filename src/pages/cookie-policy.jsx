import React from "react"
import { Cookie } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/seo/WebpageSeo"

export default function CookiePolicy() {
  return (
    <>
      <WebpageSeo title="Cookie Policy" slug="cookie-policy" />
      <PageHeader
        title="Cookie Policy"
        subtitle="Brownies are better tbh"
        subtitleIcon={<Cookie size={16} />}
      />
    </>
  )
}
