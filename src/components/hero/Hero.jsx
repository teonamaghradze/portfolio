import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* <motion.h2 variants={textVariants}>TEONA MAGHRADZE</motion.h2> */}
          <motion.h2 variants={textVariants}>Front-End Web Developer</motion.h2>
          {/* <motion.h1 variants={textVariants}>Web Developer</motion.h1> */}
          <motion.p>Hello</motion.p>

          <div className="social">
            <a href="https://github.com/teonamaghradze">
              <img src="/github.svg" alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/teona-maghradze-557639263/">
              <img src="/linkedin.svg" alt="linkedin logo" />
            </a>

            <a href="mailto:maghradzeteo@gmail.com">
              <img src="/at-solid.svg" alt="mail logo" />
            </a>
          </div>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="button" variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button className="button" variants={textVariants}>
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt=""
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTxtContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-end Web Developer
      </motion.div>

      <div className="imageContainer">
        {/* <img src="/code-icon.png" alt="" /> */}
      </div>
    </div>
  );
}

export default Hero;
