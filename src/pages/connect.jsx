import React from "react"
import { Social } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/seo/WebpageSeo"

export default function Connect() {
  return (
    <>
      <WebpageSeo
        title="Connect & Contact"
        slug="connect"
        description="Get in touch by connecting with us on social media, or contact us for any thoughts, feedback, or queries you may have."
      />
      <PageHeader
        title="Connect With Us"
        subtitle="Get in touch"
        subtitleIcon={<Social size={16} />}
      />
      <main></main>
    </>
  )
}
