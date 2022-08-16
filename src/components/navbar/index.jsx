import React from "react";
import {
  HouseFill,
  PersonLinesFill,
  PostcardFill,
  ThreeDots,
} from "react-bootstrap-icons";
import "./styled.scss";

function Navbar({ setSkill, skill }) {
  return (
    <nav className="navbar-main">
      <div className="navbar-button">
        <ThreeDots />
      </div>
      <div className="navbar-item">
        <PostcardFill size={20} />
        <p>Contato</p>
      </div>

      <div className="navbar-item">
        <HouseFill size={20} />
        <p>Home</p>
      </div>

      <div
        onClick={() => setSkill(skill === false ? true : false)}
        className="navbar-item"
      >
        <PersonLinesFill size={20} />
        <p>Habilidades</p>
      </div>
    </nav>
  );
}

export default Navbar;
