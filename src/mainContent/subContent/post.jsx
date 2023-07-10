import React from "react";
import Avatar from "react-avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./post.css";

function post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post-size-set">
      <div className="post-content-size">
        <div className="post-container">
          <Avatar
            className="avatar"
            name={user}
            size="25"
            round={true}
            /*src="path/to/avatar-image.jpg"*/
          />
          <div className="post-flex-item">
            <span className="profile-name">{user}</span> • {timestamp}
          </div>
          <div className="post-flex-item">
            <MoreHorizIcon />
          </div>
        </div>
        <div>
          <img className="post-image" src={postImage} alt="Photographer" />
        </div>
        <div className="below-mark-container">
          <div className="below-mark">
            <FavoriteBorderIcon />
          </div>
          <div className="below-mark">
            <SendIcon />
          </div>
          <div className="below-mark">
            <ChatBubbleOutlineIcon />
          </div>
          <div className="below-mark">
            <BookmarkBorderIcon />
          </div>
        </div>
        <div>{likes} likes</div>
        <div className="caption">
          <span>{user}</span> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </div>
      </div>
    </div>
  );
}

export default post;
