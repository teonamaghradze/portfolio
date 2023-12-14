import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallax.scss";
import { useRef } from "react";

function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0c0c1d, #253238)",
      }}
    >
      <motion.h1 style={{ y: yText }}>Who Am I ?</motion.h1>
      <motion.div></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallax;
