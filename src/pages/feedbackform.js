import React, {useState} from 'react'
import Form from '../components/Form'
import FormLC from '../components/FormLC'
import FormCoding from '../components/FormCoding'
import { v4 as uuidv4 } from "uuid";

const FeedbackForm = () => {
    const [reviews, setReviews] = useState([])
    const [form, setForm] = useState({company: "", review: "", id: uuidv4()});
    const [formCd, setFormCd] = useState({company: "", name: "", concepts: "", prompt: "", id: uuidv4()});
    const [formLC, setFormLC] = useState({company: "", name: "", link: "", id: uuidv4()})
  return (
    <div className='feedback-section'>
        <Form form = {form} reviews = {reviews} setForm={setForm} setReviews={setReviews}/>
        <FormCoding formCd = {formCd} setFormCd = {setFormCd}/>
        <FormLC formLC = {formLC} setFormLC = {setFormLC}/>
    </div>
  )
}

export default FeedbackForm