import React, {useState} from 'react'
import ReviewList from '../components/ReviewList'
import { v4 as uuidv4 } from "uuid";

const ApplePrep = () => {
    const [reviews, setReviews] = useState([])
  return (
    <div className='googleForm'>
        <h1>Apple Interview Feedback</h1>
        <ReviewList reviews = {reviews} setReviews = {setReviews}/>
    </div>
  )
}

export default ApplePrep