import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages";
import Applications from './pages/applications';
import Network from './pages/network';
import InterviewPrep from './pages/interviewPrep';
import GooglePrep from './pages/googlePrep';

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
>>>>>>> Stashed changes
  );
}

export default App;
