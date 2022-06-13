import React, { useEffect, useState } from "react"
import { ScrollerMotion } from "scroller-motion"
import { AnimatePresence, motion } from "framer-motion"
import { NotificationsProvider } from "@mantine/notifications"
import { Affix } from "@mantine/core"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Loader from "./Loader"
import CookieConsentBanner from "./CookieConsent/CookieConsentBanner"
import { useCookies } from "react-cookie"
import { easeOutQuart } from "../../utils/animations"
import CookiePrefsModal from "./CookieConsent/CookiePrefsModal/CookiePrefsModal"

export default function Layout({ children, location }) {
  const [loading, setLoading] = useState(true)
  const [cookiePrefs, setCookiePrefs] = useState(true)
  const [cookieModalOpen, setCookieModalOpen] = useState(false)
  const [cookies, setCookie] = useCookies()

  const hasUserSetCookiePrefs = () => {
    if (cookies.giCookiePrefs !== "true") {
      setCookiePrefs(false)
      setCookie("giCookiePrefs", false, {
        path: "/",
        expires: new Date(2147483647000),
      })
      setCookie("giAnalytics", false, {
        path: "/",
        expires: new Date(2147483647000),
      })
      setCookie("giPersonalisation", false, {
        path: "/",
        expires: new Date(2147483647000),
      })
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
                    <CookieConsentBanner
                      setCookiePrefs={setCookiePrefs}
                      location={location}
                      openCookieModal={setCookieModalOpen}
                    />
                  </motion.div>
                </Affix>
              )}
              <CookiePrefsModal
                open={cookieModalOpen}
                setOpen={setCookieModalOpen}
                location={location}
              />

              {/* </ScrollerMotion> */}
            </>
          )}
        </NotificationsProvider>
      </AnimatePresence>
    </>
  )
}
