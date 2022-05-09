import { useContext, useRef, useState } from "react";
import "../../styles/login.css";
import { Form, Image, Button, FloatingLabel } from "react-bootstrap";
import logo from "../../images/logo.png";
import k4k from "../../images/logo.svg";
import { Context } from "../../context/Context";
import axios from "axios";
import dotenv from "dotenv";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dotenv.config();
    const safeSearch = process.env.REACT_APP_API_URL;
    if (userRef.current.value === "" || passwordRef.current.value === "") {
      setError(true);
    } else {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post(safeSearch + "auth/login", {
          email: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        // console.log(res.data);
        // alert(res.data);
        window.location.replace("/dashboard");
      } catch (err) {
        dispatch({ type: "LOGIN_ FAILURE" });
      }
    }
  };
  console.log(isFetching);

  return (
    <div className="login">
      <div className="loginEntry">
        <div className="loginForm">
          <Image src={logo} fluid className="loginLogo" />
          <p className="welcomeHeading">Welcome K4Codes Blog Admin</p>
          <p className="loginHeading">Please Log in to your account.</p>
          <Form onSubmit={handleSubmit} autoComplete="off">
            {error && (
              <p style={{ color: "white", marginTop: "10px" }}>
                All Details Are Required.
              </p>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel controlId="floatingInput1" label="User Email">
                <Form.Control
                  type="email"
                  placeholder="Enter Username"
                  ref={userRef}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FloatingLabel controlId="floatingInput2" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit" className="loginBtn">
              Submit
            </Button>
          </Form>
        </div>
        <div className="loginPoster">
          <Image src={k4k} fluid className="loginRightimg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
