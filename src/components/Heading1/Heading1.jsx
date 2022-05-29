import React from "react"
import { Box, Divider, Title } from "@mantine/core"
import { motion } from "framer-motion"
import useStyles from "./Heading1.styles"
import { animPageSubtitle, animPageTitle } from "../../utils/animations"

export default function Heading1({
  title,
  subtitle,
  subtitleIcon,
  subtitlePosition,
  small = false,
}) {
  const { classes } = useStyles()

  return (
    <>
      {subtitle && (
        <motion.div
          variants={animPageSubtitle}
          initial="initial"
          animate="animate"
        >
          <Divider
            my="xs"
            labelPosition={subtitlePosition}
            label={
              <>
                {subtitleIcon}
                <Box ml={5} style={{ fontSize: "1rem" }}>
                  {subtitle}
                </Box>
              </>
            }
          />
        </motion.div>
      )}
      <motion.div variants={animPageTitle} initial="initial" animate="animate">
        <Title order={1} className={small ? classes.titleSmall : classes.title}>
          {title}
        </Title>
      </motion.div>
    </>
  )
}
