import React from "react"
import { motion } from "framer-motion"
import { animLogo } from "../../utils/animations"

export default function Loader({ setLoading }) {
  return (
    <>
      <motion.div
        variants={animLogo}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        style={{
          // overflow: "hidden",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          paddingLeft: "calc(100vw - 100%)", // prevents scrollbar layout shift when main content mounts
        }}
      >
        <div style={{ width: 50, height: 50, backgroundColor: "red" }}></div>
      </motion.div>
    </>
  )
}
