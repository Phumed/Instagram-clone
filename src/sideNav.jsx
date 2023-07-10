import React from "react";
import "./sideNav.css";
import { BrowserRouter, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "react-avatar";

function sideNav() {
  return (
    <div className="navigation">
      <div>
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="Instagram Logo"
        />
      </div>

      <div>
        <ul className="ULcontainer">
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <HomeIcon />
              </div>
              <span className="word">Home</span>
            </div>
          </li>
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <SearchIcon />
              </div>
              <span className="word">Search</span>
            </div>
          </li>
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <ExploreIcon />
              </div>

              <span className="word">Explore</span>
            </div>
          </li>
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <SlideshowIcon />
              </div>
              <span className="word">Reels</span>
            </div>
          </li>
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <SendIcon />
              </div>
              <span className="word">Messages</span>
            </div>
          </li>
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <FavoriteBorderIcon />
              </div>
              <span className="word">Notifications</span>
            </div>
          </li>
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <AddBoxIcon />
              </div>
              <span className="word">Create</span>
            </div>
          </li>
          <li className="LIcontainer">
            <div className="flex-items">
              <div className="sign">
                <Avatar
                  className="avatar"
                  name="John Doe"
                  size="20"
                  round={true}
                  /*src="path/to/avatar-image.jpg"*/
                />
              </div>
              <span className="word">Profile</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="menu flex-items LIcontainer">
        <div className="sign">
          <MenuIcon />
        </div>
        <span className="word">More</span>
      </div>
    </div>
  );
}

export default sideNav;
