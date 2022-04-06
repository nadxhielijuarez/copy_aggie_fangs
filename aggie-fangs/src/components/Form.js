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

    </form>
  )
}

export default Form