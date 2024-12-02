import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/insta.png";
import Indeed from "../assets/indeed.png";
import Button from "../assets/button.png";
import "../css/Specialfooter.css"; // Link to your custom CSS for additional styling

const SpecialFooter = () => {
  return (
    <footer className="footer px-3">
      <div className="container">
        <div className="row mt-5 pt-5">
          {/* Contact Section */}
          <div className="col-lg-4 mb-4 text-light">
            <p className="footer-para">/ get in touch /</p>
            <h3 className="mb-5">
              "We’d love to hear from you! Reach out to discuss how our AI
              solutions can fit your needs."
            </h3>
            <p className="footer-para">
              Have questions or need more information? We're here to help! Get
              in touch with us today.
            </p>
            <div className="row mt-4">
              <div className="col-sm-6">
                <h5>Call Center</h5>
                <p className="footer-para">+1 (123) 456-7890
                <br/>
                +1 (987) 654-3210</p>
              </div>
              <div className="col-sm-6">
                <h5>Our Location</h5>
                <p className="footer-para">
                  123 Innovation Drive,
                  <br /> Tech City, CA 94016
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-6">
                <h5>Email</h5>
                <p className="footer-para">cube@gmail.com</p>
              </div>
              <div className="col-sm-6">
                <h5>Social Media</h5>
                <div className="d-flex">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="img-fluid me-2"
                    width="30"
                  />
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="img-fluid me-2"
                    width="30"
                  />
                  <img
                    src={Indeed}
                    alt="Indeed"
                    className="img-fluid"
                    width="30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-lg-8">
            <div className="p-4 rounded shadow bg-info text-dark">
              <h3>Get in touch</h3>
              <p className="mt-3">
                Your journey to mastering Artificial Intelligence starts here!
                Connect with us!
              </p>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="form-label fw-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning d-flex align-items-center rounded-pill px-4"
                >
                  <img src={Button} alt="Send" className="img-fluid me-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <hr />
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 style={{ color: "#066790",marginLeft:"15%" }}>
              LO<span style={{ color: "#D33434" }}>GO</span>
            </h3>
            <h1 className="main-heading text-gradient" style={{textAlign:"left",marginLeft:"15%"}}>
              Seamless access
              <br /> to innovative AI
              <br />
              solutions
            </h1>
          </div>
          <div className="col-md-3 mb-4 text-center text-md-start ms-0 ms-lg-5 ps-0 ps-lg-5">
            <h3>Company</h3>
            <ul className="list-unstyled " style={{marginTop:"12%"}}>
              <li>About</li>
              <li>LearnWithAI</li>
              <li>Virtual AI</li>
              <li>AI-Powered</li>
              <li>AIEducation</li>
              <li>Tutoring</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 text-center text-md-start ms-0 ms-md-5 ps-0 ps-md-5">
            <h3>Services</h3>
            <ul className="list-unstyled" style={{marginTop:"12%"}}>
              <li>AI Solutions</li>
              <li>Computer Vision</li>
              <li>AI Automation</li>
              <li>LLM</li>
              <li>Global reach</li>
              <li>Certificate</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 text-center">
  <div
    className="btn btn-light mx-auto text-center d-flex  flex-md-row flex-column justify-content-between align-items-center"
    style={{ borderRadius: "50px", width: "95%" }}
  >
    <p className="mb-0">Cube@2024, All Rights Reserved</p>
    <p className="mb-0">Terms of Use Policy. Environmental Policy</p>
  </div>
</div>

</div>
   
    </footer>
  );
};

export default SpecialFooter;