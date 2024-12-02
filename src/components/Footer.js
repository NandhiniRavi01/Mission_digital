import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container mt-5 pt-5 px-5">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h3 style={{ color: " #066790" }}>
              LO<span style={{ color: "#D33434" }}>GO</span>
            </h3>
            <h1 className="main-heading text-gradient">
              Seamless access
              <br /> to innovative AI <br />
              solutions
            </h1>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4 text-center">
            <h3>Company</h3>
            <p>About</p>
            <p>LearnWithAI</p>
            <p>Virtual AI</p>
            <p>AI-Powered</p>
            <p>AIEducation</p>
            <p>Tutoring</p>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-4 text-center">
            <h3>Services</h3>
            <p>AI Solutions</p>
            <p>Computer Vision</p>
            <p>AI Automation</p>
            <p>LLM</p>
            <p>Global reach</p>
            <p>Certificate</p>
          </div>
        </div>

        {/* Footer Row */}
        <div className="row mt-4">
          <div className="col">
            <div className="btn btn-light d-md-flex justify-content-between align-items-center text-center py-3">
              <p className="mb-2 mb-md-0">Cube@2024, All Rights Reserved</p>
              <p className="mb-0">Terms of Use Policy. Environmental Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
