import React, {useState} from 'react'
import ReviewList from '../components/ReviewList'

const MicrosoftPrep = () => {
    const [reviews, setReviews] = useState([])
  return (
    <div className='googleForm'>
        <h1>Mircosoft Interview Feedback</h1>
        <Form form = {form} reviews = {reviews} setForm={setForm} setReviews={setReviews}/>
        <ReviewList reviews = {reviews} setReviews = {setReviews}/>
    </div>
  )
}

export default MicrosoftPrep