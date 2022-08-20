import React from "react";
import "./styled.scss";
import imageProfile from "../../assets/profile.jpg";
import { Github, Link, Linkedin } from "react-bootstrap-icons";

function Information() {
  return (
    <div className="main-info">
      <div className="profile-image">
        <img src={imageProfile} alt="vinicius" />
      </div>
      <div className="profile-content">
        <h1>Vinicius Gama </h1>
        <p>Web developer react & react Native</p>
        <div className="profile-abstract">
          <p>
            Olá! Sou um desenvolvedor web que sempre está em busca de aprender
            coisas novas e aplicar meus conhecimentos para resolver problemas,
            Tenho mais de 1 ano de experiência criando aplicações em React para
            empresas, como sistema interno, portal de pedidos e otimização de
            processos.
          </p>
        </div>
        <div className="profile-network">
          <a href="https://github.com/fireblaze267">
            <div className="network-group">
              <p>Github</p>
              <Github />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/vinicius-gama/">
            <div className="network-group">
              <p>Linkedin</p>
              <Linkedin />
            </div>
          </a>

          <a href="https://hdf-gamma.vercel.app/">
            <div className="network-group">
              <p>HDF</p>
              <Link />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Information;
