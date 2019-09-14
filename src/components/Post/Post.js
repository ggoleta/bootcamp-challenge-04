import React from "react";

import "./Post.css";

import Comment from "../Comment/Comment";

function Post({ post }) {
  console.log(post);
  return (
    <div className="panel">
      <div className="info-user">
        <img src={post.author.avatar} alt="User Avatar" />
        <ul>
          <li className="nome-user">{post.author.name}</li>
          <li className="post-date">{post.date}</li>
        </ul>
      </div>

      <p className="post">{post.content}</p>

      <Comment />
    </div>
  );
}

export default Post;
