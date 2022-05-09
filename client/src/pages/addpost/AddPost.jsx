import React from "react";
import Post from "../../components/post/Post";
import Topbar from "../../components/topbar/Topbar";

const AddPost = () => {
  return (
    <React.Fragment>
      <div className="main">
        <Topbar />
        <div className="main_content">
          <Post />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddPost;
