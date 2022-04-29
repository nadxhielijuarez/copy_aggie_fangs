import React, {useState} from 'react'
import ReviewList from '../components/ReviewList'
import {Link } from "react-router-dom";
import styled from "styled-components";
import VideoComp from '../components/VideoPlayer/VideoComp'
import FeedbackView from '../components/FeedbackView';
import LeetCodeURL from '../components/LeetCodeURL'
import HackerRankURL from '../components/HackerRankURL'
import OtherURL from '../components/OtherURL'

const LinkButton = styled.button `
  cursor: pointer;
  background-color: rgb(100, 0, 0);
  width: 300px;
  height: 150px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: left;
`

var companyName = <text>Microsoft</text>;

const MicrosoftPrep = () => {
    const [reviews, setReviews] = useState([])

    localStorage.setItem("this-company", "Microsoft");

  return (
    <div class='company-page'>
        <div class='company-header'>
          <h1>Interview Preparation Resources For {companyName}</h1>
        </div>
        <div class='split'>
          <div class='company-left'>
            <div class='company-section'>
              <h1>Our Coding Problems</h1>
              <body>
                Go to our <a href="/coding">practice coding problems</a> and select the "Sort By {companyName}" option.
              </body>
            </div>
            <div class='company-section'>
              <h1>HackerRank Links</h1>
              <ul>
                <HackerRankURL/>
              </ul>
            </div>
          </div>
          <div class='company-right'>
            <div class='company-section'>
              <h1>LeetCode Problems</h1>
              <ul>
                <LeetCodeURL/>
              </ul>
            </div>
            <div class='company-section'>
              <h1>More Resources</h1>
              <ul>
                <OtherURL/>
              </ul>
            </div>
          </div>
        </div>
        <div class='company-section'>
          <h1>Youtube Playlist</h1>
          <VideoComp playListId = "PLi9RQVmJD2fYMiu6JOL3PiEVh_Is6jAin"/>
        </div>
        <div class="company-section reviewList">
          <h1>Interview Reviews For {companyName}</h1>
          <FeedbackView/>
        </div>
    </div>
  )
}

export default MicrosoftPrep