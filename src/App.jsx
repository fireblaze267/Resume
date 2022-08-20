import React, { useEffect, useState } from "react";
import "./App.scss";
import SkillsCard from "./components/Skillcard";
import Information from "./components/information";
import Navbar from "./components/navbar";
import ContactCard from "./components/contactCard";

function App() {
  const [skillView, setSkillView] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {}, [contact, skillView]);

  return (
    <div className="main-app">
      <Navbar
        contact={contact}
        setContact={setContact}
        skill={skillView}
        setSkill={setSkillView}
      />
      <Information />
      {skillView && <SkillsCard setSkill={setSkillView} />}
      {contact && <ContactCard setContact={setContact} />}
    </div>
  );
}

export default App;
