import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import SignImage from "../assets/Sign.png"; // Correct import
import "../css/Signup.css";

// Importing FontAwesome icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa"; 

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false, 
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreeTerms: e.target.checked });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account created with", formData);
  };

  return (
    <div className="create-account-container">
      <div className="image-container">
        <img src={SignImage} alt="Account creation" /> {/* Corrected here */}
      </div>

      <div className="create-account-form">
        <h1>Create Account</h1>  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group password-field">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <span
              className="password-toggle"
              onClick={togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-group checkbox-agree">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
              required
            />
            <div className="tandc">
              I agree to the <a href="/terms">terms and conditions</a>.
            </div>
          </div>

          <button type="submit" className="create-account-button">
            Sign up
          </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>

        <div className="social-signup">
          <p>Or sign up with</p>
          <div className="social-icons">
            <div className="social-icon">
              <FaGoogle size={32} />
            </div>
            <div className="social-icon">
              <FaFacebook size={32} />
            </div>
            <div className="social-icon">
              <FaTwitter size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
