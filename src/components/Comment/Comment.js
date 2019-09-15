import React from "react";

import "./Comment.css";

function Comment({ comments }) {
  return (
    <>
      {comments.map(c => (
        <div className="content-comment" key={c.id}>
          <img src={c.author.avatar} alt="User Avatar" />
          <p className="comment">
            {c.author.name} {c.content}
          </p>
        </div>
      ))}
    </>
  );
}

export default Comment;
