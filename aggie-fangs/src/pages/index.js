import React from 'react'
import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
import {Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled.button `
  cursor: pointer;
  background-color: rgb(100, 0, 0);
  width: 300px;
  height: 150px;
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;
`

const Home = () => {
  return (
    <div>
      <div class="hp welcome">
        <div class="split welcome-left">
          <h1>Welcome To</h1>
          <img src={logo} alt="logo"/>
          <h1>Aggie Fangs!</h1>
        </div>
        <div class="split welcome-right">
          <body>
            Are you looking for a place to start preparing for a technical interview?
            Do you need information on the company you're applying to and what they're
            looking for in their employees? Do you want to share feedback on a company 
            you just interviewed with? Then you came to the right place! Here at Aggie 
            Fangs, we want to give you a one-stop shop for all of your interview 
            preparation needs! From student feedback to practice coding problems to 
            interview prep checklists, our goal is to make your preparation as smooth 
            as possible so that <i>you don't suck</i> in your next interview.
          </body>
        </div>
      </div>
      <div class="hp companies">
        <div class="split companies-left">
          <h1>Companies</h1>
          <body>
            Every company has a different way of interviewing applicants. Here, you can 
            see resources related to particular companies, including interview experiences 
            from students like you.
          </body>
        </div>
        <div class="split companies-right">
          <Link to="/interviewPrep"><LinkButton>
            Browse Companies
          </LinkButton></Link>
        </div>
      </div>
      <div class="hp codinghp">
        <div class="split coding-left">
          <Link to="/coding"><LinkButton>
            Practice Coding
          </LinkButton></Link>
        </div>
        <div class="split coding-right">
          <h1>Coding Problems</h1>
          <body>
            There is a wide variety of coding problems you could encounter during an 
            interview. Here, you can see practice problems, code your solutions, and get 
            help in problems you don't know how to solve.
          </body>
        </div>
      </div>
      <div class="hp interview-help">
        <div class="split help-left">
          <h1>Interview Guide</h1>
          <body>
            If you are new to interviewing, then this guide may be helpful to you. Here,
            you can learn about how to present yourself during an interview in a professional 
            and appealing way.
          </body>
        </div>
        <div class="split help-right">
          <Link to="/coding"><LinkButton>
            Interview Guide
          </LinkButton></Link>
        </div>
      </div>
    </div>
  )
}

export default Home