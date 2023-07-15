import React from "react";
import "../css/ContactUs.css";
import TripPlannerImg from "../images/Trip Planner.png";

export default function ContactUs() {
  return (
    <div style={{ boxSizing: "border-box", maxWidth: "100vw" }}>
      <footer class="site-footer">
        <div>
          <div class="grid-container">
            <div class="grid-item">
              <img
                style={{
                  objectFit: "contain",
                  height: "120px",
                  width: "120px",
                }}
                src={TripPlannerImg}
                class="logo-img"
              />
            </div>

            <div class="grid-item inner-grid-container">
              <div class="grid-item">
                <a href="">About Us</a>
              </div>
              <div class="grid-item">
                <a href="">Health and Social Care</a>
              </div>
              <div class="grid-item">
                <a href="">Privacy Policy</a>
              </div>
              <div class="grid-item">
                <a href="">Blog</a>
              </div>
              <div class="grid-item">
                <a href="">Contact us</a>
              </div>
              <div class="grid-item">
                <a href="">Finance</a>
              </div>
              <div class="grid-item">
                <a href="">Cookie Policy</a>
              </div>
              <div class="grid-item">
                <a href="">Jobs</a>
              </div>
            </div>

            <div class="grid-item">
              <div class="social-buttons">
                <a href="">
                  <i class="fab fa-instagram circle-icon"></i>
                </a>
                <a href="">
                  <i class="fab fa-facebook circle-icon"></i>
                </a>
                <a href="">
                  <i class="fab fa-linkedin-in circle-icon"></i>
                </a>
                <a href="">
                  <i class="fab fa-twitter circle-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />

          <p style={{ color: "silver",fontFamily: '"Quicksand", sans-serif', fontSize:'12px' }}>
            Copyright © 2021 | Redempt Ltd | Redempt Resourcing | Redempt Health
            ltd All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
