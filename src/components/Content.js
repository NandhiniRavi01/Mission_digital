import React from "react";
import "../css/Content.css";
import Plus from "../assets/service-images/plus.png";
import AI from "../assets/service-images/AI-image.png";
import Startbutton from "../assets/service-images/start-button.png";
import Cube from "../assets/service-images/cube.png";
import AIPowered from "../assets/service-images/AI-Powered.png";
import Gamified from "../assets/service-images/Gamified.png";
import Certification from "../assets/service-images/Certification.png";
import RealWorld from "../assets/service-images/Real-world.png";
import MultiLanguage from "../assets/service-images/Multi-language.png";
import Collabarative from "../assets/service-images/Collabarative.png";
import Automated from "../assets/service-images/Automated.png";
import Line from "../assets/service-images/Line.png";
import Header from "./Header";
import Footer from "./Footer";
const Content = () => {
  return (
    <>
    <Header />
    <main className="container">
      {/* Section 1 */}
      <div className="row align-items-center my-5 py-5">
        <div className="col-md-6">
          <h1>
            <span style={{ color: "#D33434" }}>AI Portal offers a</span>
            <br />
            wide range of AI-
            <br />
            powered services
          </h1>
        </div>
        <div className="col-md-6">
          <p>
            Our interactive learning platform features personalized content,
            gamified challenges, and real-world scenario training. With
            AI-powered tutoring and automated feedback, students receive
            continuous support to enhance their skills.
          </p>
          <div className="d-inline-flex align-items-center gap-3 bg-warning p-3 rounded ">
            <img src={Plus} alt="plus" className="img-fluid" />
            <p className="mb-0  fs-sm-5 fs-5 fw-bold">Discover More</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="text-center my-5">
        <img src={AI} alt="AI" className="img-fluid" />
        <div className=" d-none d-md-none d-lg-block">
          <div
            className="d-flex gap-3 "
            style={{ float: "right", marginTop: "-50px", marginRight: "10px" }}
          >
            <img src={Startbutton} alt="Start Button" className="img-fluid" />
            <h4>Watch Video</h4>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-dark text-white p-5 rounded my-5 ">
        <p className="text-start text-uppercase">/ services /</p>
        <h3 className="text-start mb-5">
          Mission Digital AI is
          <br /> a leading provider
          <br /> of innovative
        </h3>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 d-flex flex-column flex-md-row">
            <img
              src={Cube}
              alt="Cube"
              className="me-3"
              style={{ width: "70px", height: "70px" }}
            />
            <div>
              <h4>Interactive Learning Platform</h4>
              <p>
                Mission Digital AI provides an engaging learning experience with
                interactive lessons on AI. Lessons are designed to simplify
                complex concepts, making them easier to understand.
              </p>
              <img
                src={Line}
                alt="line"
                className="img-fluid mt-2 d-none d-lg-block "
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-6 d-flex flex-column flex-md-row">
            <img
              src={AIPowered}
              alt="AI-Powered"
              className="me-3"
              style={{ width: "70px", height: "70px" }}
            />
            <div>
              <h4>AI-Powered Tutoring</h4>
              <p>
                Our AI-powered tutors offer personalized guidance to students
                24/7. These virtual tutors help answer questions, clarify
                concepts, and assist with assignments.
              </p>
              <img
                src={Line}
                alt="line"
                className="img-fluid mt-2 d-none d-lg-block "
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
          <div className="col d-flex align-items-start flex-column flex-md-row">
            <img
              src={Gamified}
              alt="Gamified"
              className="me-3"
              style={{ width: "60px" }}
            />
            <div>
              <h4>Gamified Learning Challenges</h4>
              <p>
                Learning is made fun through interactive, gamified challenges
                designed to boost engagement. These tasks simulate real-world
                scenarios and allow learners to apply their knowledge.
              </p>
              <img
                src={Line}
                alt="line"
                className="img-fluid mt-2 d-none d-lg-block"
              />
            </div>
          </div>

          <div className="col d-flex align-items-start flex-column flex-md-row">
            <img
              src={Certification}
              alt="Certification"
              className="me-3"
              style={{ width: "60px" }}
            />
            <div>
              <h4>Certification Programs</h4>
              <p>
                Mission Digital AI offers certifications upon completion of AI
                courses. These certifications are industry-recognized, enhancing
                learners’ career opportunities.
              </p>
              <img
                src={Line}
                alt="line"
                className="img-fluid mt-2 d-none d-lg-block"
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
          <div className="col d-flex align-items-start flex-column flex-md-row">
            <img
              src={RealWorld}
              alt="RealWorld"
              className="me-3"
              style={{ width: "60px" }}
            />
            <div>
              <h4>Real-World Scenario Training</h4>
              <p>
                The platform includes real-world simulations and projects for
                hands-on learning. Learners work on practical challenges that
                mimic industry problems.
              </p>
              <img
                src={Line}
                alt="line"
                className="img-fluid mt-2 d-none d-lg-block"
              />
            </div>
          </div>

          <div className="col d-flex align-items-start flex-column flex-md-row">
            <img
              src={MultiLanguage}
              alt="MultiLanguage"
              className="me-3"
              style={{ width: "60px" }}
            />
            <div>
              <h4>Multi-Language Support</h4>
              <p>
                Mission Digital AI ensures that language is never a barrier to
                learning. The platform offers content in multiple languages,
                making it accessible globally.
              </p>
              <img
                src={Line}
                alt="line"
                className="img-fluid mt-2 d-none d-lg-block"
              />
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row mt-5">
          <div className="col d-flex align-items-start flex-column flex-md-row">
            <img
              src={Collabarative}
              alt="Collabarative"
              className="me-3"
              style={{ width: "60px" }}
            />
            <div>
              <h4>Collaborative Learning Environment</h4>
              <p>
                A digital space where students can connect, share, and learn
                together. Collaborative tools enable discussions, group
                projects, and peer-to-peer support.
              </p>
            </div>
          </div>

          <div className="col d-flex align-items-start flex-column flex-lg-row">
            <img
              src={Automated}
              alt="Automated"
              className="me-3"
              style={{ width: "60px" }}
            />
            <div>
              <h4>Automated Grading and Feedback</h4>
              <p>
                AI automates assignment grading, saving time and providing
                instant results. Detailed feedback is given to students to help
                them identify areas of improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default Content;
