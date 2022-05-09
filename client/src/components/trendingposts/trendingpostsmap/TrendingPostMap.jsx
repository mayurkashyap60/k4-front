import React from "react";
import TrendingPostView from "../trendingpostsview/TrendingPostView";

const TrendingPostMap = ({ trendingpost }) => {
  var getIntoArray = [...trendingpost];
  return (
    <React.Fragment>
      {getIntoArray.map((p, i) => (
        <TrendingPostView postview={p} key={i} />
      ))}
    </React.Fragment>
  );
};

export default TrendingPostMap;
