<<<<<<< HEAD
import React from 'react'
import { v4 as uuidv4 } from "uuid";
const Form = ({form, reviews, setForm, setReviews}) => {

  const handleChange = e => {
    const{name, value} = e.target;
    setForm({...form, [name]: value});

  }
  const handleSubmit = e =>{
    e.preventDefault()
    setReviews([...reviews, form])
    setForm({company: "", review: "", id: uuidv4()})
  }

  return (  
    <form className="form" onSubmit={handleSubmit}>
        <h2>Leave Feedback</h2>
          <label htmlFor='Company'>Company</label>
          <input type="text" 
                 placeholder="Company Name"  
                 id="company" 
                 name="company" 
                 autoComplete="off"
                 value = {form.company}
                 onChange={handleChange}>
                 
          </input>
          <label htmlFor='review'>review</label>
          <textarea
                 value={form.review}
                 placeholder="Give feedback"  
                 id="review" 
                 name="review" 
                 autoComplete="off"
                 onChange={handleChange}>
                 
          </textarea>
          <button type='submit'>Submit</button>
=======
import React, {useState} from 'react'
import { uuid } from "uuidv4";
const Form = () => {
// const [form, setForm] = useState({Company: "", review: "", id: uuid()})
//   const [reviews, setReviews] = useState([])
//   const handleChange = e =>{
//       const {name, value} = e.target
//       setForm({...form, [name]:value })
//   }

//   const handleSubmit = e =>{
//       e.preventDefault()
//       e.setReviews([...reviews, form])

//   }
  return (
    <form /*onSubmit={handleSubmit}*/>
        <h2>Leave Feedback</h2>
            <label html="review">Review</label>
            <textarea 
                //value = {form.review} 
                type= "text" 
                placeholder="Leave Company Feedback" 
                id="review" 
                autoComplete='off'
                //onChange={handleChange}
            />
            <button type="submit">Submit</button>

>>>>>>> NotionAPI
    </form>
  )
}

export default Form