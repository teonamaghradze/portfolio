import "./Aboutme.scss";
import htmlIcon from "../../html5.svg";
import css from "../../css3-alt.svg";
import scss from "../../sass.svg";
import js from "../../js.svg";
import react from "../../react.svg";
import angular from "../../angular.svg";
import git from "../../git-alt.svg";
import teo from "../../teo.jpg";
import ts from "../../Ts.png";
import redux from "../../reduxx.png";

function Aboutme() {
  return (
    <div className="aboutme">
      <div className="txt">
        <div className="rectingle"></div>

        <h2>🚀 My journey into the Web Development </h2>
        <p>
          I’ve always been interested in computer sciences but for some reasons
          I had never imagined that I could enroll in this field until recently.
          Web developer career caught my eye as its centered on creative problem
          solving that’s pretty appealing to me. Since then, I've been soaking
          up knowledge in web development, building a solid foundation both in
          theory and practice.
        </p>
        <h2> 💡 What Sparks My Coding Passion</h2>
        <p>
          Every day, I'm improving and learning new skills and spending most of
          my time coding. I'm a hardworking person who can handle multiple
          tasks. I even learned and worked on projects using two
          frameworks—React and Angular—that were completely new to me. The
          coding process excites me, especially the perfect mix of creativity
          and logic.
          {/* I enjoy the challenge of transforming a design idea into a
          user-friendly interface.  */}
          Crafting layouts and making things functional is what I love the most.
        </p>
        <h1 style={{ fontSize: "25px" }}>⚙Tech Stack</h1>
        <div className="logos">
          <img src={htmlIcon} alt="" />
          <img src={css} alt="" />
          <img src={scss} alt="" />
          <img src={git} alt="" />
          <img src={js} alt="" />
          <img
            style={{ marginTop: "3px", width: "27px", height: "27px" }}
            src={ts}
            alt=""
          />
          <img src={react} alt="" />
          <img src={redux} alt="" />
          <img src={angular} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="shape">
          <img src={teo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
