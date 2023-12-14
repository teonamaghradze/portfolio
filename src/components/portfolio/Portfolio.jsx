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

    desc: "At the end of my study in EPAM/UPSKILL I made a cv-app project,  I used: ReactJS, Redux, Fetched data from Mirage.js",
    link: "https://react-cv-app-git-main-teonamaghradze.vercel.app/",
  },

  {
    id: 2,
    title: "Trip Planner",
    src: tripPlannerAppImage,

    desc: "responsive at the end of my TBC IT Academy, I had to make final project about the topic of my choice, so I made a trip planner project, using Angular, API,",
    link: "https://final-project-angular-6est.vercel.app/",
  },

  {
    id: 3,
    title: "Space Tourism",
    src: space,

    desc: "uisquam eius aliquam quo delectus laudantium officia ipsum commodi est numquam rerum.",
    githubRepo: "",
  },

  {
    id: 4,
    title: "Split Calculator",
    src: splitter,

    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eius aliquam quo delectus laudantium officia ipsum commodi est numquam rerum.",
  },
];

function Single({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <section>
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
