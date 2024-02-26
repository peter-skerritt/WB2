import React from "react";
import "../styles/textBox.css";
import Buttons from "./Buttons";

const textBox = () => {
    return (
        
      <div class="text-box1">
      <Buttons/>
        <div class="title-text">
          <h3>Peter Skerritt</h3>
          <h2 class="sub-text">Software Developer</h2>
        </div>
        <div class="main-text">
          <p>I am a young, thirsty for knowledge and fiendishly keen Software Developer, with a strong love of all things tech. I code in my spare time,
             making many (often unfinished and wonky) projects - on everything from F1 team-name generators, to study timers and cruise-ship itineraries. With a background
             in a wide variety of industries, I can bring a sprawling and surprising skillset to any Development Team. 
          </p>
        </div>
      </div>
        
    );
  };
  
  export default textBox;