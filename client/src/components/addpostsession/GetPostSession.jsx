import React from "react";
import { useState } from "react";
import dotenv from "dotenv";
import { useEffect } from "react";
import axios from "axios";
import PassPostSession from "./PassPostSession";
function GetPostSession() {
  const [postsession, setPostsession] = useState([]);

  useEffect(() => {
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    const fetchAllPostsession = async () => {
      const res = await axios.get(safeSearch + "postsession");
      let abc = res.data;
      abc = abc.reverse();
      setPostsession(abc);
    };
    fetchAllPostsession();
  }, []);

  return (
    <React.Fragment>
      <PassPostSession postsession={postsession} />
    </React.Fragment>
  );
}

export default GetPostSession;
