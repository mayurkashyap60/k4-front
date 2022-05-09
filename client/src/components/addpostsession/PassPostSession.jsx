import React from "react";
import PostSessionPreview from "./PostSessionPreview";

const PassPostSession = ({ postsession }) => {
  return (
    <React.Fragment>
      {postsession.map((ps, i) => (
        <PostSessionPreview key={i} postsessions={ps} />
      ))}
    </React.Fragment>
  );
};

export default PassPostSession;
