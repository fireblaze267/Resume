import React from "react";
import "./styled.scss";
import { EnvelopeFill, Git, Github, Linkedin } from "react-bootstrap-icons";

function Navbar() {
  const links = [
    {
      label: "Linkedin",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/vinicius-gama/",
    },
    {
      label: "Github",
      icon: <Github />,
      link: "https://github.com/fireblaze267",
    },
    {
      label: "Resume",
      icon: <Git />,
      link: "https://github.com/fireblaze267/Resume",
    },
    {
      label: "Email",
      icon: <EnvelopeFill />,
      link: "mailto:vinicius.gama25@hotmail.com?subject=Olá, Vinicius Gama",
    },
  ];

  return (
    <nav className="navbar-main">
      <div className="navbar-img">
        <label>👋</label>
      </div>
      <div className="navbar-info">
        <h1>Vinicius Gama</h1>
        <div className="navbar-links">
          {links.map((x, index) => {
            return (
              <a
                key={index}
                href={x?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-links-items"
              >
                {x?.icon}
                <label>{x?.label}</label>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
