import { Button, Container } from "@mantine/core"
import React, { useState } from "react"
import { Cookie } from "tabler-icons-react"
import CookiePrefsModal from "../components/global/CookieConsent/CookiePrefsModal/CookiePrefsModal"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/seo/WebpageSeo"

export default function CookiePolicy({ location }) {
  const [cookieModalOpen, setCookieModalOpen] = useState(false)

  return (
    <>
      <WebpageSeo title="Cookie Policy" slug="cookie-policy" />
      <PageHeader
        title="Cookie Policy"
        subtitle="Brownies are better tbh"
        subtitleIcon={<Cookie size={16} />}
      />
      <main>
        <Container
          size="lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCookieModalOpen(true)}
          >
            Cookie Preferences
          </Button>
          <CookiePrefsModal
            open={cookieModalOpen}
            setOpen={setCookieModalOpen}
            location={location}
          />
        </Container>
      </main>
    </>
  )
}
