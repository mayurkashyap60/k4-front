import React from "react";
import FetchPost from "./fetchpost/FetchPost";

const Posts = ({ posts }) => {
  return (
    <React.Fragment>
      <div className="current_session_posts">
        {posts.map((p, i) => (
          <FetchPost key={i} post={p} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Posts;
