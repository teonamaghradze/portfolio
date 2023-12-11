import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-end" }}>
          {/* <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="#Skills"
            style={{ marginLeft: "100px" }}
          >
            Skills
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="#Portfolio"
          >
            Portfolio
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="#Contact"
          >
            Contact
          </motion.a> */}
        </div>

        {/* <div> */}
        <img className="code-icon" src="/code-icon.png" alt="" />
        {/* </div> */}

        {/* <div className="social">
          <a href="https://github.com/teonamaghradze">
            <img src="/github.svg" alt="github logo" />
          </a>
          <a href="https://www.linkedin.com/in/teona-maghradze-557639263/">
            <img src="/linkedin.svg" alt="linkedin logo" />
          </a>

          <a href="mailto:maghradzeteo@gmail.com">
            <img src="/at-solid.svg" alt="mail logo" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
