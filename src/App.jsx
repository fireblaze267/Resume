import React from "react";
import "./App.scss";
import Information from "./components/information";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <Information />
    </div>
  );
}

export default App;
