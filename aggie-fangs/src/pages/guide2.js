import React from 'react'
import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
import styled from "styled-components";
import {Link } from "react-router-dom";

const LinkButton = styled.button `
  cursor: pointer;
  background-color: rgb(100, 0, 0);
  width: 200px;
  height: 90px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 23px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: left;
  margin-right: 20px;
`

function Guide2 () {
    return (
        <div>
            <div class="guide-header">
                <h1>Personality Interviews</h1>
                <h2>Guides:</h2>
                <Link to="/guide1"><LinkButton>
                    Resumes
                </LinkButton></Link>
                <Link to="/guide2"><LinkButton>
                    Personality Interviews
                </LinkButton></Link>
                <Link to="/guide3"><LinkButton>
                    Technical Interviews
                </LinkButton></Link>
            </div>
            <div class="guide-section">
                <h2>Why Prepare For a Personality Interview?</h2>
                <body>
                    One of the most important things to many employers today is their work environment. A 
                    healthy work environment is both productive and fun to work in. And the first thing that 
                    an employer can do to work toward that goal is by vetting the personalities of their 
                    employees through a personality interview. Often, this only consists of one or two questions 
                    or just an observation of how you conduct yourself throughout the interview. But how you do in 
                    this can mean the difference between being hired or not.
                </body>
            </div>
            <div class="guide-section">
                <h2>What Is My Interviewer Looking For?</h2>
                <body>
                    Many companies emphasize different things in their employees, so they may ask differing questions 
                    based on what they value. To get a good idea of what a company is looking for, try to find their 
                    values statement online. Here are some things that every company values in their employees to some 
                    extent:
                    <ul>
                        <li>A strong work ethic</li>
                        <li>Teamwork and communication skills</li>
                        <li>Ability to handle criticism</li>
                        <li>Time management</li>
                        <li>General problem solving skills</li>
                    </ul>
                </body>
            </div>
            <div class="guide-section">
                <h2>What Is My Interviewer Trying To Avoid?</h2>
                <body>
                    Interviewers look for bad personality traits just as much as they do good personality 
                    traits. Here are some of the red flags that they may be watching for:
                    <ul>
                        <li><i>Lack of professionalism.</i> Even in a job with little customer interaction, unprofessional people can be difficult to work with.</li>
                        <li><i>Overly thought-out and prepared answers.</i> Canned answers can seem ingenuine and might tell a recruiter that the candidate is putting on a fake self.</li>
                        <li><i>Excessive negativity about past jobs or experiences.</i> If you had a poor outlook on your past job, there is no way of knowing that you won't have the same attitude toward your next job.</li>
                    </ul>
                </body>
            </div>
            <div class="guide-section">
                <h2>How Do I Prepare For a Personality Interview?</h2>
                <body>
                    The best thing you can do to be prepared is to reflect on example personality interview questions 
                    and think about relevant past experiences that you can bring up. Here are some sample questions:
                    <ul>
                        <li>Describe yourself using three adjectives.</li>
                        <li>What do you do to handle stress and pressure?</li>
                        <li>What does an ideal vacation look like to you?</li>
                        <li>What are you passionate about?</li>
                        <li>Describe a time when you were coming up on a deadline and knew you couldn't finish your work on time? How did you approach your work? (Or what would you do in such a situation?)</li>
                        <li>Describe a time when your boss was unsatisfied with your work. What did you do? (Or what would you do in such a situation?)</li>
                        <li>What would you say is your greatest weakness? Are you doing anything to address it and get better?</li>
                        <li>What do people most often criticize about you? Is it a legitimate concern?</li>
                        <li>What project have you completed that you were the proudest of?</li>
                        <li>If you knew that your boss was wrong about something important, how would you approach the situation?</li>
                        <li>Describe a time when you had a major setback in a project. How did you handle it?  (Or what would you do in such a situation?)</li>
                    </ul>
                    Overall, remember that the most important thing is to be yourself. If you make up answers to questions, your employer will find out sooner 
                    or later. Being genuine and up-front about your flaws will be a sign of maturity to the employer.
                </body>
            </div>
            <div class="guide-section">
                <h2>Further Reference</h2>
                <body>
                    <ul>
                        <li><a href="https://www.edarabia.com/personality-interview-questions-every-hiring-manager-should-ask/">14 Common Personality Interview Questions</a></li>
                        <li><a href="https://www.indeed.com/career-advice/interviewing/personality-interview-questions">7 Sample Personality Interview Questions and Answers</a></li>
                        <li><a href="https://www.thebalancecareers.com/personal-interview-questions-and-sample-answers-2063477#:~:text=Learn%20as%20much%20as%20you,Answer%20honestly%2C%20and%20stay%20positive.">How To Answer Peronal Interview Questions (With Examples)</a></li>
                    </ul>
                </body>
            </div>
        </div>
    );
}

export default Guide2