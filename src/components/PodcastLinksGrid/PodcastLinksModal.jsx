import React from "react"
import { Button, Modal } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import PodcastLinksGrid from "./PodcastLinksGrid"

export default function PodcastLinksModal({ modalOpen, setModalOpen }) {
  const smallScreen = useMediaQuery("(max-width: 576px)")

  return (
    <>
      <Modal
        centered
        padding="md"
        opened={modalOpen}
        overflow="inside"
        onClose={() => setModalOpen(false)}
        title="Choose wisely..."
      >
        <PodcastLinksGrid />
      </Modal>

      {!smallScreen && <PodcastLinksGrid />}

      {smallScreen && (
        <Button
          fullWidth
          size="md"
          mb="xl"
          onClick={() => setModalOpen(true)}
          variant="gradient"
          gradient={{ from: "blue", to: "giBlue", deg: 60 }}
          color="giBlue"
        >
          Choose podcast platform
        </Button>
      )}
    </>
  )
}
