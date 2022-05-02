import React from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
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
import FeedbackForm from "./pages/feedbackform";
import Settings from "./pages/settings";
import "./App.css";

const GlobalStyle1 = createGlobalStyle`
  html {
    --bgcolor: #fafafa;
    --bg2color: #e4e5f1;
    --btncolor: #484b6a;
    --btntxtcolor: #fafafa;
    --navcolor: #484b6a;
    --navtxtcolor: #fafafa;
    --navtxtcolor2: #B6CCD7;
    --hdrcolor: #6082B6;
    --txtcolor: #484b6a;
    --brdrcolor: #0d0d0d;
    --shdwcolor: #ccc;
    --lnkcolor: #406094;
    --lnk2color: #262948;
  }
`

const GlobalStyle2 = createGlobalStyle`
  html {
    --bgcolor: #484b6a;
    --bg2color: #717283;
    --btncolor: #9394a5;
    --btntxtcolor: #262948;
    --navcolor: #262948;
    --navtxtcolor: #fafafa;
    --navtxtcolor2: #B6CCD7;
    --hdrcolor: #ADD8E6;
    --txtcolor: #fafafa;
    --brdrcolor: #0d0d0d;
    --shdwcolor: rgba(50,50,50,0.5);
    --lnkcolor: #9cc7b5;
    --lnk2color: #8bb6c4;
  }
`

const GlobalStyleOriginal = createGlobalStyle`
  html {
    --bgcolor: rgb(254,251,234);
    --bg2color: rgb(250, 250, 250);
    --btncolor: rgb(100, 0, 0);
    --btntxtcolor: rgb(255, 255, 255);
    --navcolor: rgb(80, 0, 0);
    --navtxtcolor: rgb(255, 255, 255);
    --navtxtcolor2: #B6CCD7;
    --hdrcolor: rgb(100, 0, 0);
    --txtcolor: rgb(0, 0, 0);
    --brdrcolor: #0d0d0d;
    --shdwcolor: #ccc;
  }
`

window.onload = function() {
  var defaultStyle = localStorage.getItem("current-style");
  if (!defaultStyle) {
      localStorage.setItem("current-style", "style2");
  }
  var thisCompany = localStorage.getItem("this-company");
  if (!thisCompany) {
    localStorage.setItem("this-company", "None");
  }
  var localDBAddress = "http://localhost:3002";
  var publicDBAddress = "http://35.208.174.43:3002";
  //publicDBAddress = "http://aggie-fangs.uc.r.appspot.com/:3002";
  localStorage.setItem("db-address", publicDBAddress);
  var localCompAddress = "http://localhost:3001";
  var publicCompAddress = "http://35.209.50.168:3001";
  localStorage.setItem("comp-address", publicCompAddress);
}

function App() {
  document.title = "Aggie Fangs";

  const whichStyle = () => {
    var styleInput = localStorage.getItem("current-style");
    var thisStyle = <GlobalStyle1/>;
    if (styleInput == "style2") {
      thisStyle = <GlobalStyle2/>;
    }
    return thisStyle;
  };
  
  return (
      <Router>
        {whichStyle()}
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<Home />}/>
          <Route path="/applications" element = {<Applications/>}/>
          <Route path="/feedbackform" element = {<FeedbackForm/>}/>
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
          <Route path="/settings" element = {<Settings/>}/>
        </Routes>
      </Router>
  );
}

export default App;