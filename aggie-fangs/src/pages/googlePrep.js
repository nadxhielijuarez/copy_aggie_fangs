import React, {useState} from 'react'
import Form from '../components/Form'
import Notion from '../components/Notion'
import ReviewList from '../components/ReviewList'
import VideoComp from '../components/VideoPlayer/VideoComp'
import { v4 as uuidv4 } from "uuid";

const GooglePrep = () => {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({company: "", review: "", id: uuidv4()});
  return (
    <div className='googleForm'>
        <h1>Google Interview Feedback</h1>
        <Form form = {form} reviews = {reviews} setForm={setForm} setReviews={setReviews}/>
        <ReviewList reviews = {reviews} setReviews = {setReviews}/>
        <Notion/>
    </div>
  )
}

export default GooglePrep
