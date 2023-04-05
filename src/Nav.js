import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
          className="nav__logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          className="nav__avatar"
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
    </div>
  );
};

export default Nav;
