import React from "react";
import { Button, Col } from "react-bootstrap";

const TrendingPostView = ({ postview }) => {
  const trending = () => {
    alert("Trending");
  };

  return (
    <React.Fragment>
      <div className="posts">
        <Col>
          <small title="Name" className="text-ellipsis">
            {postview.username}
          </small>
        </Col>
        <Col>
          <small title="Title" className="text-ellipsis">
            {postview.title}
          </small>
        </Col>
        <Col>
          <small title="Category" className="text-ellipsis">
            {postview.categories}
          </small>
        </Col>
        <Col>
          <small title="Date" className="text-ellipsis">
            {new Date(postview.createdAt).toDateString()}
          </small>
        </Col>
        <Col>
          <small>
            <Button className="states_btn" title="Trending" onClick={trending}>
              <i className="fa fa-star red" aria-hidden="true"></i>
              &nbsp;&nbsp;Trending
            </Button>
          </small>
        </Col>
        <Col>
          <small>
            <Button className="states_btn" title="Featured">
              <i className="fa fa-bookmark red" aria-hidden="true"></i>
              &nbsp;&nbsp;Featured
            </Button>
          </small>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default TrendingPostView;
