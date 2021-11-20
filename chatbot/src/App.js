import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatBotRobot from "./Chatbot.component";

function App() {
  return (
    <span>
      <ChatBotRobot />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>CHATBOT TEAM 3 - VIRTUAL ESTATE AGENT</p>
        </header>
      </div>
    </span>
  );
}

export default App;
