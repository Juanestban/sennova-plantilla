export const animateContainerModal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const modalContentAnimate = {
  fadeIn: {
    top: -1000,
    transition: { duration: 0.5 },
  },
  fadeOut: {
    top: 0,
    transition: { duration: 0.3 },
  },
}
