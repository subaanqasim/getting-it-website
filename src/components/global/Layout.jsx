import React, { useState } from "react"
import { ScrollerMotion } from "scroller-motion"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Loader from "./Loader"

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {loading && (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        )}

        {!loading && (
          <>
            <Navbar key="navbar" />
            {/* <ScrollerMotion> */}
            {children}
            <Footer fixed={true} key="footer" />
            {/* </ScrollerMotion> */}
          </>
        )}
      </AnimatePresence>
    </>
  )
}
