import React from "react"
import { Social } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"

export default function connect() {
  return (
    <>
      <PageHeader
        title="Connect With Us"
        subtitle="Get in touch"
        subtitleIcon={<Social size={16} />}
      />
    </>
  )
}
