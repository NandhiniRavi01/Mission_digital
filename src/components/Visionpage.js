import React from "react";
import '../css/Visionpage.css'
import Header from './Header';
import Footer from "./Footer";
import { Avatar } from '@mui/material';
import vission1 from '../assets/vission/vission1.png';
import vission2 from "../assets/vission/vission2.png";
import vission3 from "../assets/vission/vission3.png";
import vission4 from "../assets/vission/vission4.png";
import vission5 from "../assets/vission/vission5.png";
import vission from "../assets/vission/vission.png";
import goal from "../assets/vission/goal.png";
import mission from "../assets/vission/mission.png";
import missiondown from "../assets/vission/mission-down.png";
import vissiondown from "../assets/vission/vission-down.png";
import goaldown from "../assets/vission/goal-down.png";
import SpecialFooter from "./SpecialFooter";
function VisionPage(){
return(
    <>
    <Header />
    <main>
      {/* Section 1 */}
      <div className="row-aligin">
        <div className="vission-first">
          <h1 className="vision-h1">
            "
            <span style={{ color: "#D33434" }}>Future of</span> education with
           
            AI-driven learning, making
           
            advanced <span style={{color:"#D33434"}}> technology </span> 
             accessible to everyone, 
            everywhere."
          </h1>
        </div>
        <div className="vission-second">
          <p className="vission-para">
            We envision a future where students can develop essential skills, achieve
            industry-recognized certifications, and be empowered to thrive in the fast- 
            paced digital economy. Our goal is to inspire innovation, collaboration, and 
            lifelong learning for a better, more connected future. 
          </p>
         
            <button className="vission-learmore">Learn More</button>
          
          </div>
          </div>
        <div className="row-aligin-vission">
            
        <img
                alt="vission"
                src={vission1}
                className="vission1-pic"
              />
              
              <img
                alt="vission"
                src={vission2}
                className="vission2-pic"
              />
              <img
                alt="vission"
                src={vission3}
                className="vission3-pic"
              />
              <img
                alt="vission"
                src={vission4}
                className="vission2-pic"
              />
              <img
                alt="vission"
                src={vission5}
                className="vission1-pic"
              />

        </div>
        <div className="vision">
        <div className="vission-divide">
        <div className="vission-content" style={{marginTop:'20px'}}>
        <img
                alt="vission"
                src={vission}
                className="vission"
                
              />
              <p className="overflow-text">Vision</p>
              <img
                alt="mission-down"
                src={vissiondown}
                className="down-images"
              />

              </div>
        <div className="content-fully">
        <h3>Vision of Mission Digital AI</h3>
        <p className="vission-para">The vision of Mission Digital AI is to transform education by seamlessly integrating advanced technologies into the learning experience, making artificial intelligence accessible to all. We aspire to create an inclusive platform that fosters curiosity and innovation, empowering learners from diverse backgrounds to thrive in a digital world. By leveraging interactive, gamified content and real-world applications, we aim to cultivate critical thinking and problem-solving skills essential for navigating today’s complex landscape.</p>
        <button className="vission-readmore">Read More</button>
        </div>  

        
        </div>

        <div className="vission-divide">
       
        <div className="content-fully">
        <h3>Mission of Mission Digital AI</h3>
        <p className="vission-para">The mission of Mission Digital AI is to democratize AI education by making it accessible, engaging, and practical for learners of all ages. The platform aims to blend technology and education, creating an interactive learning environment where students can easily grasp complex AI and cybersecurity concepts. By offering simplified lessons, gamified challenges, real-world scenarios, and localized content, Mission Digital AI strives to equip students with essential AI skills and prepare them for future digital landscapes.The Mission Digital AI, part of CubeAiSolution,</p>
        <button className="vission-readmore">Read More</button>
        </div> 
        <div className="vission-content">
        <img
                alt="mission"
                src={mission}
                className="vission"
              />
              <p className="overflow-text">Mission</p>
              <img
                alt="mission-down"
                src={missiondown}
                className="down-images"
              />

              </div> 

        
        </div>
        
        <div className="vission-divide">
        <div className="vission-content">
        <img
                alt="goal"
                src={goal}
                className="vission"
              />
              <p className="overflow-text">Goal</p>
              <img
                alt="mission-down"
                src={goaldown}
                className="down-images"
              />

              </div>
        <div className="content-fully">
        <h3>Goals of Mission Digital AI</h3>
        <p className="vission-para">Our goal is to foster a collaborative community where learners can connect with educators and industry professionals, sharing knowledge and experiences to enhance their understanding. By prioritizing inclusivity and localization, we aim to reach a diverse audience, ensuring that everyone has the opportunity to thrive in the digital age. Ultimately, we are dedicated to shaping the future of education and preparing students to navigate and excel in a technology-driven world.</p>
        <button className="vission-learmore">Read More</button>
        </div>  

        
        </div>
        </div>
          <SpecialFooter />
          </main>
          </>
)
}
export default VisionPage;