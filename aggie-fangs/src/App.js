import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages";
import Applications from './pages/applications';
import Network from './pages/network';
import InterviewPrep from './pages/interviewPrep';
import Coding from './pages/coding';
import GooglePrep from './pages/googlePrep'
import FacebookPrep from './pages/facebookPrep';
import AmazonPrep from './pages/AmazonPrep';
import NetflixPrep from './pages/NetflixPrep';
import ApplePrep from './pages/ApplePrep';
import MicrosoftPrep from './pages/microsoftPrep';
import Guide1 from "./pages/guide1";
import Guide2 from "./pages/guide2";
import Guide3 from "./pages/guide3";

function App() {
  document.title = "Aggie Fangs";
  
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/applications" element = {<Applications/>}/>
        <Route path="/interviewPrep" element = {<InterviewPrep/>}/>
        <Route path="/coding" element = {<Coding/>}/>
        <Route path="/network" element = {<Network/>}/>
        <Route path="/googlePrep" element = {<GooglePrep/>}/>
        <Route path="/facebookPrep" element = {<FacebookPrep/>}/>
        <Route path="/amazonPrep" element = {<AmazonPrep/>}/>
        <Route path="/netflixPrep" element = {<NetflixPrep/>}/>
        <Route path="/applePrep" element = {<ApplePrep/>}/>
        <Route path="/microsoftPrep" element = {<MicrosoftPrep/>}/>
        <Route path="/guide1" element = {<Guide1/>}/>
        <Route path="/guide2" element = {<Guide2/>}/>
        <Route path="/guide3" element = {<Guide3/>}/>
      </Routes>
    </Router>

  );
}

export default App;