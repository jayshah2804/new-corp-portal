import "./App.css";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Main";
import Login from "./Components/Home/Login";
import React, { useState } from "react";
import SideMenu from "./Components/Header/SideMenu";
import { Redirect, Route, useHistory } from "react-router-dom";

let flag = false;
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const history = useHistory();

  if (isSideMenuOpen) {
    // document.getElementById("myContainer").style.overflowX = "scroll";
    flag = true;
  }

  if (!isSideMenuOpen) {
    // if (flag) document.getElementById("myContainer").style.overflowX = "visible";
  }

  const loginHandler = (loggedValue) => {
    history.push("/dashboard");
    setIsLoggedIn(loggedValue);
  };
  const sideMenuHoverHandler = () => {
    setIsSideMenuOpen(true);
  };

  const sideMenuLeaveHandler = () => {
    setIsSideMenuOpen(false);
  };
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login login={loginHandler} />
      </Route>
      <Route path="/dashboard">
        {isLoggedIn ? (
          <React.Fragment>
            <Header sideMenuOpen={sideMenuHoverHandler} />
            <div className="myContainer">
              {isSideMenuOpen && (
                <SideMenu sideMenuClose={sideMenuLeaveHandler} />
              )}
              <Dashboard />
            </div>
          </React.Fragment>
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
    </div>
  );
}

export default App;
