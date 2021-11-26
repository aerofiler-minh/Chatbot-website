import React from "react";
import "../App.css";
import ChatBotAI from "../Chatbot.component";
import "./Visual.css";

function Visual() {
  return (
    <div className="container">
      <h1> Looking for Property? </h1>
      <u>
        <ChatBotAI />
      </u>
    </div>
  );
}

export default Visual;
