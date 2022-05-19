import React from "react"
import { ShieldLock } from "tabler-icons-react"
import Layout from "../components/global/Layout"
import PageHeader from "../components/PageHeader"

export default function privacyPolicy() {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        subtitle="Boring, but important... I guess"
        subtitleIcon={<ShieldLock size={16} />}
      />
    </Layout>
  )
}
