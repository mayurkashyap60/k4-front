import React from "react";
import { Button, Image } from "react-bootstrap";
import userIcon from "../../images/K4K.png";
import useToggle from "@rooks/use-toggle";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

const Topbar = () => {
  const { user } = useContext(Context);
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [value, setValue] = useToggle(true);
  var hide = value.toString();
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="heading">
          <Link className="link" title="Home" to="/dashboard">
            <h3 className="navbar_heading">Management</h3>
          </Link>
        </div>
        <div className="user">
          <Image src={userIcon} className="user_icon" />
          <p className="user_name">{user.username.toUpperCase()}</p>
          <button className="btn" id="toggle" onClick={setValue}>
            <i className="fa fa-chevron-down text-white" aria-hidden="true"></i>
          </button>
          <div
            className={hide === "false" ? "user_cred" : "user_cred d-none"}
            id="usercred"
          >
            <p>{user.email}</p>
            <Button className="logout_btn" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Topbar;
