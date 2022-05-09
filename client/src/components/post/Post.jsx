import React from "react";
import { Form, Button, FloatingLabel, Row, Col, Image } from "react-bootstrap";
import dotenv from "dotenv";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useEffect } from "react";
import axios from "axios";

const Post = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [photo, setImageurl] = useState("");
  const [categories, setCategories] = useState("");
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    const getCats = async () => {
      const res = await axios.get(safeSearch + "categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  const handleNewpost = async (e) => {
    e.preventDefault();
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    // const descValue = desc;
    // const encoded = encodeURIComponent(descValue);
    // console.log(title, encoded, photo, categories);
    const newPost = {
      username: user.username,
      title,
      desc,
      photo,
      categories,
    };
    if (
      newPost.title === "" ||
      newPost.desc === "" ||
      newPost.photo === "" ||
      newPost.categories === "default" ||
      newPost.categories === ""
    ) {
      setError(true);
    } else {
      try {
        console.log(newPost);
        const res = await axios.post(safeSearch + "posts", newPost);
        console.log(res.data);
        alert("Post is successfully submitted.");
        window.location.replace("/manage");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <div className="addnew_post">
            <h3 className="heading">Add New Post</h3>
            <Form onSubmit={handleNewpost} autoComplete="off">
              {error && (
                <p
                  style={{
                    color: "#ffffff",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  All fields are required
                </p>
              )}
              <Form.Group className="mb-3" controlId="formA">
                <FloatingLabel controlId="formA" label="Title" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formB">
                <FloatingLabel
                  controlId="formB"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formC">
                <FloatingLabel
                  controlId="formC"
                  label="Post Image Url"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Post Image Url"
                    onChange={(e) => setImageurl(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formD">
                <Form.Select onChange={(e) => setCategories(e.target.value)}>
                  <option value="default">Select Category</option>
                  {cats.map((c, i) => (
                    <option value={c.name} key={i}>
                      {c.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit" className="submit_btn">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="addnew_post">
            <Image fluid className="post_img" src={photo} />
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
            <p className="categories">{categories}</p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Post;
