import React, {useState} from 'react'
import ReviewList from '../components/ReviewList'
import { v4 as uuidv4 } from "uuid";
const GooglePrep = () => {
  const [reviews, setReviews] = useState([])
  return (
    <div className='googleForm'>
        <h1>Google Interview Feedback</h1>
        <ReviewList reviews = {reviews} setReviews = {setReviews}/>
    </div>
  )
}

export default GooglePrep
