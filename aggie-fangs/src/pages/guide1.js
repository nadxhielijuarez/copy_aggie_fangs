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

function Guide1() {
    return (
        <div>
            <div class="guide-header">
                <h1>Resumes</h1>
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
                <h2>Why Should Your Resume Look Good?</h2>
                <body>
                    As recruiters sort through hundreds or even thousands of applications 
                    each day, the biggest thing that they all pay attention to is the applicant's
                    resume. They might ask themselves these questions:
                    <ul>
                        <li><i>Who has the most diverse project experience?</i></li>
                        <li><i>Who has the most relevant skillset for our company?</i></li>
                        <li><i>Who has the most relevant prior job experience?</i></li>
                    </ul>
                    Or sometimes even:
                    <ul>
                        <li><i>Who has the higher GPA in school?</i></li>
                        <li><i>Who has the more professional resume?</i></li>
                    </ul>
                    As a growing software engineering student, you might not have the most appealing 
                    resume to every single recruiter. But what you can do is make yourself stand out
                    in a way such that recruiters will notice you and be interested in your application.
                    Doing this is simpler than you may think.
                </body>
            </div>
            <div class="guide-section">
                <h2>Formatting</h2>
                <body>
                    When a recruiter picks up your resume, you are immediately up against the clock.
                    According to a study by <a href="https://career.mercy.edu/blog/2019/11/08/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/#:~:text=In%20addition%2C%20a%20well%20organized,impression%20you%20make%20is%20critical.">Mercy College</a>,
                    the average recruiter spends 7 seconds reviewing each resume. That's not a lot of time!
                    You need to format your resume in a way that prominently shows all of the best things 
                    about you. Here are a few important things to keep in mind when formatting your resume:
                    <ul>
                        <li><i>Leave out any unnecessary graphics and styling.</i> Anything that will distract a recruiter is a no-go. Plain, unstyled text is to-the-point and will make the most of your 7 seconds.</li>
                        <li><i>Put your name, contact information, and GPA at the top.</i> These three are all important things that will be needed and thus should be prominent on the page.</li>
                        <li><i>Use brief descriptions.</i> The longer a description on a project or skill is, the less likely it is that it will actually be read.</li>
                    </ul>
                </body>
            </div>
            <div class="guide-section">
                <h2>Education</h2>
                <body>
                    When writing about your education in a resume, you do not need to list your entire 
                    history with school. Instead, write about things that recruiters will want to see, such as:
                    <ul>
                        <li>What college you are at or have graduated from, including a start and end date</li>
                        <li>Your major and minor (and area of emphasis if applicable)</li>
                        <li>The <i>relevant</i> coursework you have taken</li>
                        <li>Your expected graduation date if applicable</li>
                        <li>Your GPA (it's okay to have it twice on the page)</li>
                    </ul>
                </body>
            </div>
            <div class="guide-section">
                <h2>Work Experience</h2>
                <body>
                    Again, as in the education portion, you do not need to list every job you have ever 
                    worked in. For instance, for a software engineering job, you don't need to talk about the summers
                    you have spent lifeguarding or working at a kids' camp. Instead, be to-the-point. Only list <i>relevant</i>
                    work experience. Under each job, make sure to list:
                    <ul>
                        <li>The company name and your job title</li>
                        <li>What the company does</li>
                        <li>A link to the company's website</li>
                        <li>The start and end dates at the job</li>
                        <li>Notable projects you worked on during the job</li>
                    </ul>
                    If you don't have any work experience, talk briefly about what you are looking for in 
                    a software engineering job and what your general interests are within computer science. 
                    Put extra time into the projects section to show the recruiter more about your programming 
                    experience.
                </body>
            </div>
            <div class="guide-section">
                <h2>Projects</h2>
                <body>
                    The projects section is a big place to show a recruiter just what you're capable of. 
                    Here, list 3-5 of the biggest projects you have worked on. They can be school-related 
                    or just something you did on your own time. If you have a personal github, add a link 
                    to it here. If you don't have a personal github, make one and start adding projects 
                    you've done in the past. For each project, briefly describe the following:
                    <ul>
                        <li><i>What was the main point of the project?</i> Focus on the most important point of the project and leave out minor details.</li>
                        <li><i>What was your part in the project if you were in a group?</i> Talk about how you contributed to the team. If you had a leadership role, make sure to make that obvious in this description.</li>
                        <li><i>What technical skills did you develop in this project?</i> i.e. data structures, algorithms, web-building, front-end/back-end, etc.</li>
                    </ul>
                </body>
            </div>
            <div class="guide-section">
                <h2>What Not To Put On Your Resume</h2>
                <body>
                    Remember, a recruiter could spend as little as 7 seconds or less looking at your resume.
                    To optimize the time they spend, try to get rid of any of the following things on your resume:
                    <ul>
                        <li><i>Big graphics and distracting style.</i> Anything unimportant that draws the recruiter's eye is a serious waste of time.</li>
                        <li><i>Long, wordy paragraphs.</i> Do your best in each description to be as brief as possible. The longer a paragraph is, the less likely a recruiter is to read it.</li>
                        <li><i>Information irrelevant to the job you're applying to.</i> 9 times out of 10, the recruiter will not care about your lifeguarding job in high school or the cosplay club in college. Only talk about your technical experience, leadership experience, and other relevant soft skills.</li>
                        <li><i>Spelling mistakes and grammatical errors.</i> Not proofreading your resume for spelling and grammatical errors comes across as very unprofessional.</li>
                        <li><i>Inaccuracies about your education and experience.</i> Lying about what you do and don't know can only end poorly for you. Sooner or later, your employer will find out if you are not as qualified as you say you are.</li>
                        <li><i>Solid walls of text.</i> Putting your resume in an organized list format will make it both more interesting to read and easier to scan.</li>
                    </ul>
                </body>
            </div>
            <div class="guide-section">
                <h2>Further Reference</h2>
                <body>
                    You can find more resources at the following pages:
                    <ul>
                        <li><a href="https://www.freecodecamp.org/news/writing-a-killer-software-engineering-resume-b11c91ef699d/">How To Write A Killer Resume</a></li>
                        <li><a href="https://www.hackreactor.com/blog/6-tips-for-a-software-engineer-resume-that-gets-you-hired"> 6 Tips For A Resume That Will Get You Hired</a></li>
                        <li><a href="https://novoresume.com/career-blog/software-engineer-resume">Novoresume: Examples and Resume Builder</a></li>
                    </ul>
                </body>
            </div>
        </div>
    );
}

export default Guide1