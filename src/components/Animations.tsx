export const fadeInUp = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 }
};

export const fadeInLeft = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 50 }
};

export const slideDown = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: { duration: 3, ease: "easeInOut", type: "spring", stiffness: 100, damping: 10, mass: 0.5 },
  },
  exit: {
    y: "100vh",
    transition: { duration: 1, ease: "easeInOut", type: "spring", stiffness: 100, damping: 10, mass: 0.5 },
  },
};