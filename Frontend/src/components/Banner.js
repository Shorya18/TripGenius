import { Box } from "@mui/material";
import React from "react";
import "../css/banner.css";

const Banner = () => {
  return (
    <Box className="home2">
      <Box className="secContainer">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Trip Planner</h1>
          <p className="subTitle">
            Travel to your favourite city with respectful of the enviroment!
          </p>
          <button className="btn">Goto Map</button>
        </div>
      </Box>
    </Box>
  );
};

export default Banner;
