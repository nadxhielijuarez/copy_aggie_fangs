<<<<<<< HEAD
import React, {useState} from 'react'
import Form from '../components/Form'
import ReviewList from '../components/ReviewList'
import { v4 as uuidv4 } from "uuid";
const GooglePrep = () => {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({company: "", review: "", id: uuidv4()});
  return (
    <div className='googleForm'>
        <h1>Google Interview Feedback</h1>
        <Form form = {form} reviews = {reviews} setForm={setForm} setReviews={setReviews}/>
        <ReviewList reviews = {reviews} setReviews = {setReviews}/>
=======
import React from 'react'
import Form from '../components/Form'
import Notion from '../components/Notion'

//const database_id = process.env.REACT_APP_NOTION_DATABASE_ID
const googlePrep = () => {
  return (
    <div>
        <h1>Google Interview Feedback</h1>
        <Form/>
        <Notion/> 
>>>>>>> NotionAPI
    </div>
  )
}

<<<<<<< HEAD
export default GooglePrep
=======
export default googlePrep
>>>>>>> NotionAPI
