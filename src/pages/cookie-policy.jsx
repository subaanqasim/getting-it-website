import React from "react"
import { Cookie } from "tabler-icons-react"
import Layout from "../components/global/Layout"
import PageHeader from "../components/PageHeader"

export default function cookiePolicy() {
  return (
    <Layout>
      <PageHeader
        title="Cookie Policy"
        subtitle="Brownies are better tbh"
        subtitleIcon={<Cookie size={16} />}
      />
    </Layout>
  )
}
