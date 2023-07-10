import React from "react";
import "./stories.css";
import Avatar from "react-avatar";

function stories() {
  return (
    <div className="stories-container">
      <div>
        <Avatar
          className="avatar"
          name="John Doe"
          size="50"
          round={true}
          /*src="path/to/avatar-image.jpg"*/
        />
      </div>
      <div>John Doe</div>
    </div>
  );
}

export default stories;
