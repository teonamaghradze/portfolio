import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import tripPlannerAppImage from "../../trip-planner-app.png";
import cvApp from "../../cvapp.png";
import space from "../../space.png";
import splitter from "../../splitter.png";

const items = [
  {
    id: 1,
    title: "CV-APP",
    src: cvApp,

    desc: "At the end of the UpSkill program, I had to build a fully responsive React-based CV app. Its purpose is personal portfolio creation, and the target users are those in need of a new CV. Tools I used are: Redux, React, HTML, SCSS, API. What fascinated me most was that it seemed hard at first, but during the process, it became easier, and I really enjoyed it.",
    link: "https://react-cv-app-git-main-teonamaghradze.vercel.app/",
    githubRepo: "https://github.com/teonamaghradze/react-cv-app",
  },

  {
    id: 2,
    title: "Trip Planner",
    src: tripPlannerAppImage,

    desc: "At the end of the TBC IT Academy, I had to make final project about the topic of my choice, so I made a fully responsive trip planner application, where users can find hotels, see cities and destinations on the map and also trip plans that are made by other users. I used: Angular, API, HTML/SCSS.",
    link: "https://final-project-angular-6est.vercel.app/",
    githubRepo: "https://github.com/teonamaghradze/final-project-angular",
  },

  {
    id: 3,
    title: "Space Tourism",
    src: space,

    desc: "I made a Space Tourism App, using ReactJs and HTML/SCSS. It was a fun little project to build",
    githubRepo: "https://github.com/teonamaghradze/space-tourism",
    link: "https://space-tourism-uqxy.vercel.app/space-tourism",
  },

  {
    id: 4,
    title: "Tip Calculator",
    src: splitter,
    link: "https://tip-calc-pied.vercel.app/",

    desc: "I made tip calculator using only JavaScript and CSS/HTML. Users can enter bill, tip and calculate total price that's need to be paid.",
    githubRepo: "https://github.com/teonamaghradze/tip-calc",
  },
];

function Single({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div ref={ref} className="imageContainer">
            <img src={item.src} alt="project" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a target="blank" href={item.link}>
              <button>See Demo</button>
            </a>
            <div>
              <a className="github-repo" target="blank" href={item.githubRepo}>
                <img src="/github.svg" alt="github logo" />
                <span>Github Repository</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
