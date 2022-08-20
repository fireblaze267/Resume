import React from "react";
import { Envelope, XCircleFill } from "react-bootstrap-icons";
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
          <XCircleFill size={30} onClick={() => setContact(false)} />
        </div>

        <div className="contact-card-item">
          <label>Teste de algo que vai ficar aqui</label>
          <Envelope />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
