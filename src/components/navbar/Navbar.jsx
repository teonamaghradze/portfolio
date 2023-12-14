import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <div
          style={{ display: "flex", gap: "80px", alignItems: "flex-end" }}
        ></div>

        <img className="code-icon" src="/code-icon.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
