import React from "react";
import { useState } from "react";
import "../css/nav.css";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Nav() {
  let history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:4000/auth/logout",
    })
      .then((res) => {
        if (res.data.authenticated) history.push("/login");
        else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Box className="nav">
      <Box className="logo">Trip Planner</Box>
      <Box className="links">
        <Typography>
          <Link className="nav_link" to="/">
            Home
          </Link>
        </Typography>
        <Typography>
          <Link className="nav_link" to="/login">
            Login
          </Link>
        </Typography>
        <Typography>
          <Link className="nav_link" to="/register">
            Register
          </Link>
        </Typography>
        <Typography>
          <Link className="nav_link" to="/map">
            Map
          </Link>
        </Typography>
      </Box>
      <section class="home"></section>
    </Box>
    // <div>
    //   <nav class="nav ">
    //     <div>
    //       <div class="logo">
    //         <a>Your Logo</a>
    //       </div>
    //       <div id="mainListDiv" className={isActive ? "links" : "show_list "}>

    //       </div>
    //       <span
    //         className={isActive ? "navTrigger" : "active navTrigger"}
    //         onClick={toggleClass}
    //       >
    //         <i></i>
    //         <i></i>
    //         <i></i>
    //       </span>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default Nav;
