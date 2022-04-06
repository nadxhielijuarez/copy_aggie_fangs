import React, {useState} from 'react'
import Form from '../components/Form'
import ReviewList from '../components/ReviewList'
import { v4 as uuidv4 } from "uuid";

const AmazonPrep = () => {
    const [reviews, setReviews] = useState([])
    const [form, setForm] = useState({company: "", review: "", id: uuidv4()});
  return (
    <div className='googleForm'>
        <h1>Amazon Interview Feedback</h1>
        <Form form = {form} reviews = {reviews} setForm={setForm} setReviews={setReviews}/>
        <ReviewList reviews = {reviews} setReviews = {setReviews}/>
    </div>
  )
}

export default AmazonPrep