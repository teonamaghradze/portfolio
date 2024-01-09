import "./Hero.scss";
import { motion } from "framer-motion";

import scrollDown from "../../angles-down-solid.svg";
import location from "../../location-dot-solid.svg";

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
          <motion.h2 variants={textVariants}>Front-End Web Developer</motion.h2>

          <motion.p>
            Hello, I am Teona Maghradze, A front-end developer from Georgia
            <img
              style={{ width: "20px", marginLeft: "10px" }}
              src={location}
              alt=""
            />
          </motion.p>

          <div className="social">
            <a target="blank" href="https://github.com/teonamaghradze">
              <img src="/github.svg" alt="github logo" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/teona-maghradze-557639263/"
            >
              <img src="/linkedin.svg" alt="linkedin logo" />
            </a>

            <a target="blank" href="mailto:maghradzeteo@gmail.com">
              <img src="/at-solid.svg" alt="mail logo" />
            </a>
          </div>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="button" variants={textVariants}>
              <a href="#Portfolio">See the latest works</a>
            </motion.button>
            <motion.button className="button" variants={textVariants}>
              <a href="#Contact">Contact me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            src={scrollDown}
            alt=""
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <div className="imageContainer">
        <motion.img
          style={{ width: "400px", height: "400px", borderRadius: "50%" }}
          // src="https://camo.githubusercontent.com/706457c438d2031942745299f52de650adf45a3b87de1ded443696b405dd881d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f343035353439342f73637265656e73686f74732f31353231353735362f6d656469612f64326236366334636130313932616132366431303334343862336431353138622e676966"

          src=" https://camo.githubusercontent.com/571e1b07bd12a229e4655e0f584330c56076dd3ad02975293617479c29bb1f0f/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f343035353439342f73637265656e73686f74732f31353231353735362f6d656469612f64326236366334636130313932616132366431303334343862336431353138622e676966"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
