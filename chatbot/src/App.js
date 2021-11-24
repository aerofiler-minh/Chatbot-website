import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatBotAI from "./Chatbot.component";

function App() {
  return (
    <span>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>CHATBOT TEAM 3 - VIRTUAL ESTATE AGENT</p>
          <ChatBotAI />
        </header>
      </div>
    </span>
  );
}

export default App;
