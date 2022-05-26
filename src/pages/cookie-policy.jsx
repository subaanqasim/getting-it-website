import React from "react"
import { Cookie } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"

export default function cookiePolicy() {
  return (
    <>
      <PageHeader
        title="Cookie Policy"
        subtitle="Brownies are better tbh"
        subtitleIcon={<Cookie size={16} />}
      />
    </>
  )
}
