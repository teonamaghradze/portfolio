import "./Hero.scss";
import { motion } from "framer-motion";

import { useTypewriter, Cursor } from "react-simple-typewriter";
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
  const { text } = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
    typeSpeed: 10,
    deleteSpeed: 10,
  });

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
          <motion.p>
            Hello, I am Teona Maghradze, A front-end developer from Georgia
            {/* <span> */}
            <img
              style={{ width: "20px", marginLeft: "10px" }}
              src={location}
              alt=""
            />
            {/* </span> */}
            {/* <span>
              <Cursor />
            </span> */}
            {/* <Cursor cursorStyle="</>" /> */}
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
              See the latest works
            </motion.button>
            <motion.button className="button" variants={textVariants}>
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            // src="/scroll.png"
            src={scrollDown}
            alt=""
            animate="scrollButton"
          />
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTxtContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-end Web Developer
      </motion.div> */}

      <div className="imageContainer">
        {/* <img src="/code-icon.png" alt="" /> */}
        <motion.img
          style={{ width: "400px", height: "400px", borderRadius: "50%" }}
          src="https://camo.githubusercontent.com/706457c438d2031942745299f52de650adf45a3b87de1ded443696b405dd881d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f343035353439342f73637265656e73686f74732f31353231353735362f6d656469612f64326236366334636130313932616132366431303334343862336431353138622e676966"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
