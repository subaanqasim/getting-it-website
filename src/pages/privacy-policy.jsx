import React from "react"
import { ShieldLock } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"

export default function privacyPolicy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Boring, but important... I guess"
        subtitleIcon={<ShieldLock size={16} />}
      />
    </>
  )
}
