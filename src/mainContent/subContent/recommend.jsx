import React from "react";
import "./recommend.css";
import Avatar from "react-avatar";

function recommend() {
  return (
    <div className="recommend-container">
      <div className="profile-recommend-container">
        <Avatar
          className="avatar profile-item"
          name="John Doe"
          size="50"
          round={true}
        />
        <div className="profile-item">
          <div className="profile-header">dutchie.phu</div>
          <div className="myProfileName grey-word">
            Dutchie Phumed Thumtechanon
          </div>
        </div>
        <button className="profile-button">Switch</button>
      </div>
      <div className="profile-header profile-item profile-suggested">
        <span className="grey-word">Suggested for you</span>
        <button className="profile-button">See all</button>
      </div>
      <Suggest />
      <Suggest />
      <Suggest />
      <Suggest />
    </div>
  );
}

export default recommend;

function Suggest() {
  return (
    <div>
      <div className="profile-recommend-container">
        <Avatar
          className="avatar profile-item"
          name="John Doe"
          size="30"
          round={true}
        />
        <div className="profile-item">
          <div className="profile-header">dutchie.phu</div>
          <div className="profile-followed">Follwed by yogurt + 4 more</div>
        </div>
        <button className="profile-item profile-button">Follow</button>
      </div>
    </div>
  );
}
