import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostSessionPreview = ({ postsessions }) => {
  const [active, setActive] = useState(false);
  const postdata = postsessions;
  const sessionStartDate = new Date(postdata.startdate).getMonth();
  var date = new Date().getMonth();

  useEffect(() => {
    const monthSession = () => {
      if (sessionStartDate < date) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    monthSession();
  }, [sessionStartDate, date]);

  return (
    <React.Fragment>
      <div className="entry">
        <div className="column">
          <p className="manage">
            <Link
              to={active ? "/manage" : "/addpost"}
              className={active ? "link not-allowed" : "link"}
              title="Add New Post"
            >
              Add Post
            </Link>
          </p>
          <p className="manage">
            <Link to="/post-management" className="link" title="Add New Post">
              Manage
            </Link>
          </p>
        </div>
        <div className="column">
          <div className="one">
            <div className="status">
              <i
                title="Start Date"
                className="fa fa-check"
                aria-hidden="true"
              ></i>
              <small>{new Date(postsessions.startdate).toDateString()}</small>
            </div>
            <div className="status">
              <i
                title="End Date"
                className="fa fa-times"
                aria-hidden="true"
              ></i>
              <small>{new Date(postsessions.enddate).toDateString()}</small>
            </div>
          </div>
          <div className="two">
            <div className="status">
              <i
                title="Total Posts"
                className="fa fa-sticky-note-o"
                aria-hidden="true"
              ></i>
              <small>100</small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostSessionPreview;
