import React from "react";
import "./Header.css";

const Header = props => (
  
  <div className="header">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/1200px-Futurama_1999_logo.svg.png" alt="Futurama Logo" className="logo"></img>
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;
