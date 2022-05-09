import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import dotenv from "dotenv";
import axios from "axios";
import Posts from "../posts/Posts";

const Management = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    const fetchAllPosts = async () => {
      const res = await axios.get(safeSearch + "posts");
      setPosts(res.data);
      console.log(res.data);
    };
    fetchAllPosts();
  }, []);

  return (
    <React.Fragment>
      <Posts posts={posts} />
    </React.Fragment>
  );
};

export default Management;
