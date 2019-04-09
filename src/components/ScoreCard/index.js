import React from "react";
import "./style.css";

function ScoreCard(props) {
  return (
    <div>
      <h1>Score {props.score} | High Score {props.highscore}</h1>
    </div>
  );
}

export default ScoreCard;
