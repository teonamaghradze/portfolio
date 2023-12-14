import "./Contact.scss";
// import github from "../../../public/github.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="box"></div>
      <div className="contact-box">
        <h1>Contact Information</h1>
        <a target="blank" href="https://github.com/teonamaghradze">
          <img src="/github.svg" alt="github logo" />
          <span>maghradzeteona</span>
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/teona-maghradze-557639263/"
        >
          <img src="/linkedin.svg" alt="linkedin logo" />
          <span> Teona Maghradze</span>
        </a>

        <a target="blank" href="mailto:maghradzeteo@gmail.com">
          <img src="/at-solid.svg" alt="mail logo" />
          <span>maghradzeteo@gmail.com</span>
        </a>

        <span>📞 +995555281138</span>
      </div>
    </div>
  );
}

export default Contact;
