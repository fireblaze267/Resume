import React, { useState } from "react";
import "./App.scss";
import SkillsCard from "./components/Skillcard";
import Information from "./components/information";
import Navbar from "./components/navbar";

function App() {
  const [skillView, setSkillView] = useState(false);

  console.log(skillView);

  return (
    <div className="main-app">
      <Navbar skill={skillView} setSkill={setSkillView} />
      <Information />
      {skillView && <SkillsCard setSkill={setSkillView} />}
    </div>
  );
}

export default App;
