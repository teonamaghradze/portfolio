import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.unsplash.com/photo-1683009427692-8a28348b0965?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eius aliquam quo delectus laudantium officia ipsum commodi est numquam rerum.",
  },

  {
    id: 1,
    title: "Js app",
    img: "https://images.unsplash.com/photo-1683009427692-8a28348b0965?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eius aliquam quo delectus laudantium officia ipsum commodi est numquam rerum.",
  },

  {
    id: 1,
    title: "Angular app",
    img: "https://images.unsplash.com/photo-1683009427692-8a28348b0965?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eius aliquam quo delectus laudantium officia ipsum commodi est numquam rerum.",
  },

  {
    id: 1,
    title: "React Commerce",
    img: "https://images.unsplash.com/photo-1683009427692-8a28348b0965?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <img src={item.img} alt="project" />
          </div>
          <motion.div style={{ y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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