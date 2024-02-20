import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import tripPlannerAppImage from "../../trip-planner-app.png";
import cvApp from "../../cvapp.png";
import space from "../../space.png";
import splitter from "../../splitter.png";
import foodie from "../../foodie.png";
import ecommerce from "../../ecommerce.png";
import videoversee from "../../videoversee.png";
import dashboard from "../../dashboard.png";

const items = [
  {
    id: 0,
    title: "E-commerce store",
    src: ecommerce,

    desc: "I built a fully responsive E-commerce app using ReactJs, Redux, Firebase, TailwindCss. You can add products to the cart, change their quantity, reset the cart, sign in with google or github and see the reviews of the items",
    link: "https://e-commerce-liart-five.vercel.app",
    githubRepo: "https://github.com/teonamaghradze/e-commerce",
  },
  {
    id: 1,
    title: "VideVerse",
    src: videoversee,
    desc: "I built a fully responsive YouTube-like app using ReactJS, an API, and MaterialUI. In this app, you can watch videos, filter them by category, search for any video, and view YouTube channels along with their details.",
    link: "https://videoverse-one.vercel.app/",
    githubRepo: "https://github.com/teonamaghradze/videoverse",
  },
  {
    id: 2,
    title: "Foodie - Delivery",
    src: foodie,

    desc: "I built Foodie app using ReactJs, Redux. It is the app, where you can filter the food you like by category, add them to the shopping card, delete, increase and decrease the quantity",
    link: "https://foodie-front-hpw9-git-main-teonamaghradze.vercel.app/home",
    githubRepo: "https://github.com/teonamaghradze/FoodieFront",
  },
  {
    id: 3,
    title: "CV-APP",
    src: cvApp,

    desc: "At the end of the UpSkill program, I had to build a fully responsive React-based CV app. Its purpose is personal portfolio creation, and the target users are those in need of a new CV. Tools I used are: Redux, React, HTML, SCSS, API. What fascinated me most was that it seemed hard at first, but during the process, it became easier, and I really enjoyed it.",
    link: "https://react-cv-app-git-main-teonamaghradze.vercel.app/",
    githubRepo: "https://github.com/teonamaghradze/react-cv-app",
  },

  {
    id: 4,
    title: "Admin Dashboard ",
    src: dashboard,

    desc: "I built admin panel, that renders users, products, charts, tables. I used ReactJS, Sass, Context to handle darkmode functionality, and Material UI",
    link: "https://dashboard-mu-gold-99.vercel.app/",
    githubRepo: "https://github.com/teonamaghradze/dashboard",
  },

  {
    id: 5,
    title: "Trip Planner",
    src: tripPlannerAppImage,

    desc: "At the end of the TBC IT Academy, I had to make final project about the topic of my choice, so I made a fully responsive trip planner application, where users can find hotels, see cities and destinations on the map and also trip plans that are made by other users. I used: Angular, TypeScript, API, HTML/SCSS.",
    link: "https://final-project-angular-6est.vercel.app/",
    githubRepo: "https://github.com/teonamaghradze/final-project-angular",
  },

  {
    id: 6,
    title: "Space Tourism",
    src: space,

    desc: "I made a Space Tourism App, using ReactJs and HTML/SCSS. It was a fun little project to build",
    githubRepo: "https://github.com/teonamaghradze/space-tourism",
    link: "https://space-tourism-uqxy.vercel.app/space-tourism",
  },

  {
    id: 7,
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
