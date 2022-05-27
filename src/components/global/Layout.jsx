import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import { ScrollerMotion } from "scroller-motion"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <ScrollerMotion> */}
      {children}
      <Footer fixed={true} />
      {/* </ScrollerMotion> */}
    </>
  )
}
