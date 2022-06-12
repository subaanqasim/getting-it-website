// EASING
export const easeOutQuart = [0.6, 0.01, -0.05, 0.95]
export const transIn = {
  ease: easeOutQuart,
  duration: 1.6,
}
const transOut = {
  ease: "easeInOut",
  duration: 0.8,
}

// PRESETS

const initFadeInUp = { y: 50, opacity: 0 }
export const endFadeInUp = { y: 0, opacity: 1, transition: transIn }

// ANIMATION VARIANTS

export const animLogo = {
  initial: {
    scale: 0,
    y: 100,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: transIn,
  },
  exit: {
    opacity: 0,
    transition: transOut,
  },
}

export const animNavbar = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: transIn,
  },
}

export const animNavLogo = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: { ...transIn, delay: 0.1 },
  },
}

export const animNavLinksDiv = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: { ...transIn, delay: 0.2, staggerChildren: 0.15 },
  },
}

export const animNavLink = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: transIn,
  },
}

export const animNavSearch = (mobile) => ({
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: { ...transIn, delay: mobile ? 0.25 : 0.8 },
  },
})

export const animNavBurger = (mobile) => ({
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: { ...transIn, delay: mobile ? 0.35 : 0.9 },
  },
})

export const animHeroTextContainer = {
  initial: initFadeInUp,
  animate: {
    ...endFadeInUp,
    transition: { ...transIn, staggerChildren: 0.15 },
  },
}

export const animHeroItem = {
  initial: initFadeInUp,
  animate: endFadeInUp,
}

export const animHeroArrow = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 0.8, transition: { ...transIn, delay: 1 } },
  whileHover: {
    scale: 1.1,
    y: 20,
    transition: { duration: 0.3 },
  },
}

export const animFadeUpInOnScroll = {
  initial: initFadeInUp,

  whileInView: { ...endFadeInUp, transition: { ...transIn, duration: 0.85 } },
}

export const episodeCardList = {
  initial: initFadeInUp,

  animate: {
    ...endFadeInUp,
    transition: { ...transIn, duration: 0.6 },
  },
}

export const animPageTitle = {
  initial: initFadeInUp,
  animate: {
    ...endFadeInUp,
    transition: { ...transIn, delay: 0.1, duration: 0.8 },
  },
}
export const animPageSubtitle = {
  initial: initFadeInUp,
  animate: {
    ...endFadeInUp,
    transition: { ...transIn, duration: 0.8 },
  },
}

export const animEpisodeSearch = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transIn, duration: 0.8 },
  },
}
export const animEpisodeTags = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transIn, delay: 0.15, duration: 0.8 },
  },
}

export const animFeatureContainer = {
  initial: initFadeInUp,
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easeOutQuart,
      duration: 0.85,
      staggerChildren: 0.1,
    },
  },
}

export const animFeatureItem = {
  initial: initFadeInUp,
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easeOutQuart,
      duration: 0.85,
    },
  },
}
