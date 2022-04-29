import React, {useState} from 'react'
import ReviewList from '../components/ReviewList'
import { v4 as uuidv4 } from "uuid";
import VideoComp from '../components/VideoPlayer/VideoComp'
import FeedbackView from '../components/FeedbackView';
import LeetCodeURL from '../components/LeetCodeURL'

var companyName = <text>Amazon</text>;

const AmazonPrep = () => {
    const [reviews, setReviews] = useState([])

    localStorage.setItem("this-company", "Amazon");

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
                
              </ul>
            </div>
          </div>
        </div>
        <div class='company-section'>
          <h1>Youtube Playlist</h1>
          <VideoComp playListId = "PLi9RQVmJD2fZgRyOunLyt94uVbJL43pZ_"/>  
        </div>
        <div class="company-section reviewList">
          <h1>Interview Reviews For {companyName}</h1>
          <FeedbackView/>
        </div>
    </div>
  )
}

export default AmazonPrep