import React, { useState } from "react";
import "./timeline.css";
import Post from "./post";
import Stories from "./stories";

function timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Dutchie",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "Yogurt",
      postImage:
        "https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
      likes: 200,
      timestamp: "2m",
    },
    {
      user: "Third",
      postImage:
        "https://media.istockphoto.com/id/1199496434/video/4k-abstract-particle-wave-bokeh-background-blue-water-snow-beautiful-glitter-loop.jpg?s=640x640&k=20&c=wJZnP92dlyTfrnhzG_dQ8atT77i0u3vX6_qBXhx7-WE=",
      likes: 123,
      timestamp: "now",
    },
    {
      user: "Third",
      postImage:
        "https://media.istockphoto.com/id/1199496434/video/4k-abstract-particle-wave-bokeh-background-blue-water-snow-beautiful-glitter-loop.jpg?s=640x640&k=20&c=wJZnP92dlyTfrnhzG_dQ8atT77i0u3vX6_qBXhx7-WE=",
      likes: 123,
      timestamp: "now",
    },
  ]);
  return (
    <div className="post-position">
      <div className="stories">
        <Stories />
        <Stories />
        <Stories />
      </div>
      <div className="post-element">
        {posts.map((post) => (
          <Post
            user={post.user}
            postImage={post.postImage}
            likes={post.likes}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default timeline;
