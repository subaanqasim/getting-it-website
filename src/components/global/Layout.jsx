import React, { useEffect, useState } from "react"
import { ScrollerMotion } from "scroller-motion"
import { AnimatePresence, motion } from "framer-motion"
import { NotificationsProvider } from "@mantine/notifications"
import { Affix } from "@mantine/core"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Loader from "./Loader"
import CookieConsent from "./CookieConsent/CookieConsentBanner"
import { useCookies } from "react-cookie"
import { easeOutQuart } from "../../utils/animations"

export default function Layout({ children, location }) {
  const [loading, setLoading] = useState(true)
  const [cookiePrefs, setCookiePrefs] = useState(true)
  const [cookies] = useCookies()

  const hasUserSetCookiePrefs = () => {
    if (cookies.giCookiePrefs !== "true") {
      setCookiePrefs(false)
    } else {
      setCookiePrefs(true)
    }
  }

  useEffect(() => {
    hasUserSetCookiePrefs()
  }, [])

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {loading && (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        )}
        <NotificationsProvider position="bottom-center">
          {!loading && (
            <>
              <Navbar key="navbar" />
              {/* <ScrollerMotion> */}

              {children}

              <Footer fixed={true} key="footer" />

              {!cookiePrefs && (
                <Affix position={{ bottom: 0, left: 0, right: 0 }}>
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{
                      y: 0,
                      transition: {
                        duration: 1.5,
                        delay: 1,
                        ease: easeOutQuart,
                      },
                    }}
                  >
                    <CookieConsent
                      setCookiePrefs={setCookiePrefs}
                      location={location}
                    />
                  </motion.div>
                </Affix>
              )}

              {/* </ScrollerMotion> */}
            </>
          )}
        </NotificationsProvider>
      </AnimatePresence>
    </>
  )
}
