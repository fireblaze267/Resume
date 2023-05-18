import React from "react";
import "./styled.scss";
import ellipse from "../../assets/Ellipse.svg";
import projectImg from "../../assets/project.svg";
import reactLogo from "../../assets/React-icon.svg";
import SkillsCard from "../Skillcard";
import Project from "../projects";
import { Arrow90degUp } from "react-bootstrap-icons";

function Information() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-info">
      <div className="info-container">
        <div className="profile-image">
          <img src={ellipse} alt="prototipo" />
        </div>
        <div className="info-title">
          <h1>Desenvolvedor React & React Native</h1>
        </div>
      </div>
      <div className="info-text-1">
        <p>
          Olá! Me chamo Vinicius, sou um desenvolvedor especializado em React e
          React Native, com sólida experiência na criação de aplicativos web e
          móveis. Com proficiência em JavaScript, HTML e CSS, sou capaz de
          construir interfaces modernas e responsivas, fornecendo aos usuários
          uma experiência intuitiva e agradável.
        </p>
        <img src={reactLogo} alt="React logo" />
      </div>

      <div className="info-text-2">
        <p>
          Ao longo dos anos, tenho trabalhado em diversos projetos, desde
          aplicativos corporativos até Paginas de divulgação. Minha paixão pela
          tecnologia e o constante aprendizado me impulsionam a acompanhar as
          tendências mais recentes no ecossistema React, garantindo que meus
          aplicativos sejam desenvolvidos com as melhores práticas e as últimas
          ferramentas disponíveis.
        </p>
        <img src={projectImg} alt="React logo" />
      </div>

      <SkillsCard />

      <Project />

      <div className="info-text-3">
        <div className="info-about">
          <h1>Setup</h1>
          <label>- MacBook Air M1</label>
          <label>- CCA CRA (Com mic)</label>
          <h1>Conhecimentos</h1>
          <label>- POO</label>
          <label>- Api rest</label>
          <label>- Inglês avançado</label>
        </div>
        <p>
          Tenho conhecimento dos conceitos fundamentais do React, como
          componentização, gerenciamento de estado, roteamento e manipulação de
          APIs. Além disso, sou capaz de otimizar o desempenho dos aplicativos,
          identificando gargalos e implementando soluções eficientes.
        </p>
      </div>

      <div className="info-final">
        <h1>
          Estou sempre aberto a novos desafios e colaborações emocionantes. Se
          você está procurando um desenvolvedor React ou React Native para
          trazer sua ideia à vida, ficarei feliz em contribuir com minha
          expertise e habilidades técnicas.
        </h1>
        <div onClick={() => scrollToTop()} className="info-button">
          <Arrow90degUp size={36} />
        </div>
      </div>
    </div>
  );
}

export default Information;
