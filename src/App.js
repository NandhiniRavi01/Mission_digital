import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup'
import VisionPage from './components/Visionpage';
import SpecialFooter from './components/SpecialFooter';

function App(){
  return (
    <div className="App">
     
      <Router> {/* Wrapping the entire app in Router */}
     
     <div className="content">
       <Routes> {/* Use Routes instead of Switch */}
         <Route path="/service" element={<Content/>} /> 
         <Route path="/login" element={<Login/>} /> 
         <Route path="/signup" element={<Signup/>} />
         <Route path="/vission" element={<VisionPage/>} />
         <Route path="/special" element={<SpecialFooter/>} />
</Routes>
</div>
</Router>

      
    </div>
  )
}

export default App
