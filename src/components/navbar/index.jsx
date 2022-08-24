import React from "react";
import {
  HouseFill,
  PersonLinesFill,
  PostcardFill,
  ThreeDots,
  XCircleFill,
} from "react-bootstrap-icons";
import "./styled.scss";

function Navbar({ setSkill, skill, setContact, contact }) {
  return (
    <nav className="navbar-main">
      <div className="navbar-button">
        <ThreeDots />
      </div>
      <div
        onClick={() => {
          setContact(contact === false ? true : false), setSkill(false);
        }}
        className={contact ? "navbar-item-active" : "navbar-item"}
      >
        <PostcardFill size={20} />
        <p>Contato</p>
        {contact && <XCircleFill style={{ marginLeft: 10 }} />}
      </div>

      {/*<div className="navbar-item">
        <HouseFill size={20} />
        <p>Home</p>
      </div>*/}

      <div
        onClick={() => {
          setSkill(skill === false ? true : false), setContact(false);
        }}
        className={skill ? "navbar-item-active" : "navbar-item"}
      >
        <PersonLinesFill size={20} />
        <p>Habilidades</p>
        {skill && <XCircleFill style={{ marginLeft: 10 }} />}
      </div>
    </nav>
  );
}

export default Navbar;
