import React from "react"
import { Social } from "tabler-icons-react"
import Layout from "../components/global/Layout"
import PageHeader from "../components/PageHeader"

export default function connect() {
  return (
    <Layout>
      <PageHeader
        title="Connect With Us"
        subtitle="Get in touch"
        subtitleIcon={<Social size={16} />}
      />
    </Layout>
  )
}
