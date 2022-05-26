import React from "react"
import { YinYang } from "tabler-icons-react"
import PageHeader from "../components/PageHeader"

export default function about() {
  return (
    <>
      <PageHeader
        title="Our Ethos"
        subtitle="The who, what, where and why"
        subtitleIcon={<YinYang size={16} />}
      />
    </>
  )
}
