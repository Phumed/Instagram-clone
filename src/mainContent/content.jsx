import React from "react";
import "./content.css";
import Timeline from "./subContent/timeline";
import Recommend from "./subContent/recommend";

function content() {
  return (
    <div className="content-container">
      <div className="timeline">
        <Timeline />
      </div>
      <div className="recommend">
        <Recommend />
      </div>
    </div>
  );
}

export default content;
