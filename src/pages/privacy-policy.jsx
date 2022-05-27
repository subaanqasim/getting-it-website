import React from "react"
import { ShieldLock } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/seo/WebpageSeo"

export default function PrivacyPolicy() {
  return (
    <>
      <WebpageSeo title="Privacy Policy" slug="privacy-policy" />
      <PageHeader
        title="Privacy Policy"
        subtitle="Boring, but important... I guess"
        subtitleIcon={<ShieldLock size={16} />}
      />
    </>
  )
}
