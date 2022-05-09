import React, { useEffect, useState } from "react";
import GetPostSession from "../../components/addpostsession/GetPostSession";
import Topbar from "../../components/topbar/Topbar";

const Manage = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const date = new Date();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toDateString();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    console.log(`Today Date ${today} || last date ${lastDay}`);
    if (today !== lastDay) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  const manageSession = () => {
    window.location.replace("/postsession");
  };
  return (
    <React.Fragment>
      <div className="main">
        <Topbar />
        <div className="main_content">
          <div className="add_session">
            {active ? (
              <button className="btn session_btn disabled">
                Manage Session
              </button>
            ) : (
              <button className="btn session_btn" onClick={manageSession}>
                Manage Session
              </button>
            )}
          </div>
          <div className="entry_grid">
            <GetPostSession />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Manage;
