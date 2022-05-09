import React from "react";
import { useContext } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Context } from "../../context/Context";
import dotenv from "dotenv";
import axios from "axios";
import { useState } from "react";

function AddPostSession() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const { user } = useContext(Context);
  const [error, setError] = useState(false);

  const handleAddSession = async (e) => {
    e.preventDefault();
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    const newPostSession = {
      username: user.username,
      title,
      desc,
      startdate,
      enddate,
    };
    if (
      newPostSession.title === "" ||
      newPostSession.desc === "" ||
      newPostSession.startdate === "" ||
      newPostSession.enddate === ""
    ) {
      setError(true);
    } else {
      try {
        const res = await axios.post(
          safeSearch + "postsession",
          newPostSession
        );
        console.log(res.data);
        alert("Post Session is successfully submitted.");
        window.location.replace("/manage");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="addpost_session">
        <h3 className="heading">Post Session</h3>
        <Form onSubmit={handleAddSession} autoComplete="off">
          {error && (
            <p
              style={{ color: "white", marginTop: "10px", marginLeft: "10px" }}
            >
              All Details Are Required.
            </p>
          )}
          <Form.Group className="mb-3" controlId="formBasicA">
            <FloatingLabel
              controlId="formBasicA"
              label="Post Session Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Post Session Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicB">
            <FloatingLabel
              controlId="formBasicB"
              label="Post Session Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Post Session Description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicC">
            <FloatingLabel
              controlId="formBasicC"
              label="Post Session Start Date"
              className="mb-3"
            >
              <Form.Control
                type="date"
                onChange={(e) => setStartdate(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicD">
            <FloatingLabel
              controlId="formBasicD"
              label="Post Session End Date"
              className="mb-3"
            >
              <Form.Control
                type="date"
                onChange={(e) => setEnddate(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            size="md"
            className="submit_btn"
          >
            Submit
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default AddPostSession;
