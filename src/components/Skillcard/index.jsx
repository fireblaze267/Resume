import React from "react";
import { Download, XCircleFill } from "react-bootstrap-icons";
import "./styled.scss";
import { skills } from "../../utils/skills";
import Pdf from "../../assets/ViniciusGama.pdf";

function SkillsCard({ setSkill }) {
  return (
    <div className="skill-card-main">
      <div className="skill-view">
        <div className="skill-title">
          <h1>Habilidades</h1>
          <XCircleFill size={30} onClick={() => setSkill(false)} />
        </div>

        <div className="skill-content">
          {skills.map((e, index) => {
            return (
              <div key={index} className="skill-card">
                <p>
                  {e.title} {e.icon}
                </p>
                <h1>{e.percentage}</h1>
              </div>
            );
          })}
        </div>
        <div onClick={() => setSkillView(false)} className="skill-button">
          <a href={Pdf} download="ViniciusGama.pdf">
            <button>
              <label>
                <Download size={25} /> Download CV
              </label>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
