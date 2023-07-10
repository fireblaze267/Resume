import React from "react";
import { Circle, CircleFill, Download, StarFill } from "react-bootstrap-icons";
import Pdf from "../../assets/Vinicius_Gama.pdf";
import { skills } from "../../utils/skills";
import "./styled.scss";

function SkillsCard() {
  const icons8Link = () => {
    window.open("https://icons8.com/");
  };

  return (
    <div className="skill-card-main">
      <div className="skill-view">
        <div className="skill-title">
          <h1>Habilidades</h1>
        </div>

        <div className="skill-content">
          {skills.map((e, index) => {
            return (
              <div key={index} className="skill-card">
                <p>
                  <img alt={`${e.title} logo`} src={e.icon} />
                  {e.title}
                  {e.primary && <StarFill />}
                </p>
                <div className="skill-percent">
                  {[...Array(5)].map((elem, index) => {
                    index + 1;
                    return e.percent > index ? (
                      <CircleFill key={index} />
                    ) : (
                      <Circle key={index} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <label onClick={icons8Link}>Icons by icons8</label>

        <div onClick={() => setSkillView(false)} className="skill-button">
          <a href={Pdf} download="Vinicius_Gama.pdf">
            <button>
              <label>
                <Download size={25} /> Baixar CV
              </label>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
