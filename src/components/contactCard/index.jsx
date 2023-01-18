import React from "react";
import { Envelope, Github, Linkedin, XCircleFill } from "react-bootstrap-icons";
import "./styled.scss";

function ContactCard({ setContact }) {
  return (
    <div className="contact-div">
      <div className="contact-card">
        <div className="contact-header">
          <div>
            <h1>Contato</h1>
            <label>Aqui algumas formas de entrar em contato comigo</label>
          </div>
        </div>

        <div className="contact-card-content">
          <div className="contact-card-item">
            <a href="mailto:vinicius.gama25@hotmail.com?subject=Olá">
              <div className="contact-card-item-title">
                <Envelope />
                <label>E-mail</label>
              </div>
              <label>vinicius.gama25@hotmail.com</label>
            </a>
          </div>

          <div className="contact-card-item">
            <a href="https://github.com/fireblaze267">
              <div className="contact-card-item-title">
                <Github />
                <label>Github</label>
              </div>
              <label>Vinicius Gama Sá (fireblaze267)</label>
            </a>
          </div>

          <div className="contact-card-item">
            <a href="https://www.linkedin.com/in/vinicius-gama/">
              <div className="contact-card-item-title">
                <Linkedin />
                <label>Linkedin</label>
              </div>
              <label>vinicius-gama</label>
            </a>
          </div>
        </div>
        <XCircleFill size={50} onClick={() => setContact(false)} />
      </div>
    </div>
  );
}

export default ContactCard;
