import React, {useState} from 'react'
import Form from '../components/Form'
import { v4 as uuidv4 } from "uuid";

const FeedbackForm = () => {
    const [reviews, setReviews] = useState([])
    const [form, setForm] = useState({company: "", review: "", id: uuidv4()});
  return (
    <div className='feedback-section'>
        <Form form = {form} reviews = {reviews} setForm={setForm} setReviews={setReviews}/>
    </div>
  )
}

export default FeedbackForm