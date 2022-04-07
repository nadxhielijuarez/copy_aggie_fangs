import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages";
import Applications from './pages/applications';
import Network from './pages/network';
import InterviewPrep from './pages/interviewPrep';
import GooglePrep from './pages/googlePrep'
<<<<<<< HEAD
import FacebookPrep from './pages/facebookPrep';
import AmazonPrep from './pages/AmazonPrep';
import NetflixPrep from './pages/NetflixPrep';
import ApplePrep from './pages/ApplePrep';
import MicrosoftPrep from './pages/microsoftPrep';
=======
>>>>>>> NotionAPI

function App() {
  
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/applications" element = {<Applications/>}/>
        <Route path="/interviewPrep" element = {<InterviewPrep/>}/>
        <Route path="/network" element = {<Network/>}/>
        <Route path="/googlePrep" element = {<GooglePrep/>}/>
<<<<<<< HEAD
        <Route path="/facebookPrep" element = {<FacebookPrep/>}/>
        <Route path="/amazonPrep" element = {<AmazonPrep/>}/>
        <Route path="/netflixPrep" element = {<NetflixPrep/>}/>
        <Route path="/applePrep" element = {<ApplePrep/>}/>
        <Route path="/microsoftPrep" element = {<MicrosoftPrep/>}/>
=======
>>>>>>> NotionAPI
       
      </Routes>
    </Router>

  );
}

export default App;