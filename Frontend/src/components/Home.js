import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Map from "./Map";
import ContactUs from "./ContactUs";
import FlexBox from "./FlexBox";
import Banner from "./Banner";
import "../css/Home.css";

function Home() {
  return (
    <div style={{ width: "100%" }} className="home">
      <Nav />
      <Banner />
      <FlexBox />
      <Map />
      <ContactUs />
    </div>
  );
}

export default Home;
