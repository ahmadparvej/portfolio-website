import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [active, setActive] = useState("home");
  return (
    <nav>
      <a
        href="#"
        className={active === "home" ? "active" : ""}
        onClick={() => setActive("home")}
        title="Home"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "about" ? "active" : ""}
        onClick={() => setActive("about")}
        title="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === "experience" ? "active" : ""}
        onClick={() => setActive("experience")}
        title="Experience"
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        className={active === "portfolio" ? "active" : ""}
        onClick={() => setActive("portfolio")}
        title="Portfolio"
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        className={active === "contact" ? "active" : ""}
        onClick={() => setActive("contact")}
        title="Contact"
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
