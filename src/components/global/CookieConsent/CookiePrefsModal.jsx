import { Modal } from "@mantine/core"
import React from "react"

export default function CookiePrefsModal({ open, setOpen }) {
  return (
    <>
      <Modal
        centered
        padding="md"
        opened={open}
        overflow="inside"
        onClose={() => setOpen(false)}
      >
        <div>COOKIE PREFS TOGGLES GO HERE</div>
      </Modal>
    </>
  )
}
