import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handelShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scroll > 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://www.freeiconspng.com/uploads/netflix-icon-7.png"
          alt="Logo"
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
