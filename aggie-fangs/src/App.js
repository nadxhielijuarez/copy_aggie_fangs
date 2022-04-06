import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages";
import Applications from './pages/applications';
import Network from './pages/network';
import InterviewPrep from './pages/interviewPrep';
import GooglePrep from './pages/googlePrep'

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
       
      </Routes>
    </Router>

  );
}

export default App;