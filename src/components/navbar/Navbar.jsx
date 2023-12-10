import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Teona Maghradze
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="fb logo" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="fb logo" />
          </a>
          <a href="">
            <img src="/facebook.png" alt="fb logo" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="fb logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
