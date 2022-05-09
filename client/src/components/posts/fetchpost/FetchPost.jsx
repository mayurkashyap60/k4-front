import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const FetchPost = ({ post }) => {
  const postId = post._id;
  const updatePost = () => {
    window.location.replace(`/post-update/${postId}`);
  };
  const deletePost = () => {
    window.location.replace(`/post-delete/${postId}`);
  };

  return (
    <React.Fragment>
      <div className="posts">
        <Row style={{ alignItems: "center", textAlign: "center" }}>
          <Col>
            <small title="User Name" className="text-ellipsis">
              {post.username}
            </small>
          </Col>
          <Col>
            <small title="Title" className="text-ellipsis">
              {post.title}
            </small>
          </Col>
          <Col>
            <small title="Category" className="text-ellipsis">
              {post.categories}
            </small>
          </Col>
          <Col>
            <small title="Date" className="text-ellipsis">
              {new Date(post.createdAt).toDateString()}
            </small>
          </Col>
          <Col>
            <small>
              <Button
                title="Update"
                onClick={updatePost}
                style={{ background: "none", border: "none" }}
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </Button>
            </small>
          </Col>
          <Col>
            <small>
              <Button
                title="Delete"
                onClick={deletePost}
                style={{ background: "none", border: "none" }}
              >
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </Button>
            </small>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default FetchPost;
