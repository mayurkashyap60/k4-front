import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import dotenv from "dotenv";
import axios from "axios";
import TrendingPostMap from "./trendingpostsmap/TrendingPostMap";

const TrendingPosts = () => {
  const [cats, setCats] = useState([]);
  const [searchByCat, setSearchByCat] = useState("");
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    const getCats = async () => {
      const res = await axios.get(safeSearch + "categories");
      //   console.log(res.data);
      setCats(res.data);
    };
    getCats();
  }, []);

  const changeSelectOptionHandler = async (event) => {
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    var selectValue = event.target.value;
    if (selectValue === "default") {
      alert("Please select correct value.");
      setError(true);
    } else {
      setError(false);
    }
    // console.log(event.target.value);
    const res = await axios.get(safeSearch + "posts?cat=" + selectValue);
    setSearchByCat(res.data);
    // console.log(safeSearch + "posts?cat=" + selectValue);
    const abc = res.data.length;
    console.log(abc);
    if (abc === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    // console.log(abc);
  };

  return (
    <React.Fragment>
      <div className="tf_posts">
        <Form>
          {error && (
            <p
              style={{ marginLeft: "10px", marginTop: "10px", color: "#fffff" }}
            >
              Please select correct value.
            </p>
          )}
          <Form.Group className="form-group mb-2">
            <Form.Select onChange={changeSelectOptionHandler}>
              <option value="default">Select Category</option>
              {cats.map((c, i) => (
                <option value={c.name} key={i}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
        {empty ? (
          <p style={{ marginLeft: "10px", marginTop: "10px" }}>Data is Empty</p>
        ) : (
          <TrendingPostMap trendingpost={searchByCat} />
        )}
      </div>
    </React.Fragment>
  );
};

export default TrendingPosts;
