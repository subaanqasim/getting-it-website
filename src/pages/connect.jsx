import React from "react"
import { BrandInstagram, BrandTwitter, Social } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"
import WebpageSeo from "../components/Seo/WebpageSeo"
import ContactForm from "../components/ContactForm/ContactForm"
import { Container, SimpleGrid, Text, useMantineTheme } from "@mantine/core"
import { SocialMediaCard } from "../components/SocialMediaCard"

export default function Connect() {
  const theme = useMantineTheme()
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
        spline="https://prod.spline.design/jqmTWkXJgYFINilh/scene.splinecode"
      />
      <main>
        <Container size="lg" mb="xl">
          <Text size="lg" align="center">
            Got some thoughts, ideas, or just want a general chat about
            something interesting?
          </Text>
          <Text size="lg" align="center">
            Then connect with us and get in touch via any of the avenues below!
          </Text>
        </Container>
        <Container size="sm">
          <SimpleGrid
            cols={2}
            mb="lg"
            breakpoints={[{ maxWidth: "xs", cols: 1 }]}
          >
            <SocialMediaCard
              title="Instagram"
              handle="@gettingit_pod"
              link="https://www.instagram.com/gettingit_pod"
              icon={
                <BrandInstagram
                  size={48}
                  style={{
                    strokeWidth: "1px",
                    color: theme.colors.giOrange[6],
                  }}
                />
              }
            />
            <SocialMediaCard
              title="Twitter"
              handle="@gettingit_pod"
              link="https://www.twitter.com/gettingit_pod"
              icon={
                <BrandTwitter
                  size={48}
                  style={{ strokeWidth: "1px", color: theme.colors.blue[6] }}
                />
              }
            />
          </SimpleGrid>
          <ContactForm />
        </Container>
      </main>
    </>
  )
}
