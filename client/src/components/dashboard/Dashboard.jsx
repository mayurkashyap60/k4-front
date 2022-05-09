import React from "react";
import Topbar from "../topbar/Topbar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="main">
        <Topbar />
        <div className="main_content">
          <div className="entry_grid">
            <div className="entry">
              <div className="column_1">
                <p className="manage">
                  <a href="/manage" title="Manage" className="link">
                    Manage
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
