import React from 'react'
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const SubmitButton = styled.button `
  cursor: pointer;
  background-color: var(--btncolor);
  padding: 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  color: var(--btntxtcolor);
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: center;
`

const Form = ({form, reviews, setForm, setReviews}) => {

  const handleChange = e => {
    const{name, value} = e.target;
    setForm({...form, [name]: value});

  }
  const sendInfo = e => {
    // todo
  }
  const checkValidity = () => {
    // todo
    return false;
  }
  const handleSubmit = e => {
    if (checkValidity()) {
      alert("The input data is good!");
      e.preventDefault();
      setReviews([...reviews, form]);
      setForm({company: "", review: "", id: uuidv4()});
    } else {
      alert("Please enter valid information.")
    }
  }

  return (  
    <form className="form" onSubmit={handleSubmit}>
        <h2>Share Your Experience</h2>
          <label htmlFor='Company'>Company</label><br/>
          <select placeholder="Company Name"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}>
            <option value="None">Select Company</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Amazon">Amazon</option>
            <option value="Netflix">Netflix</option>
            <option value="Apple">Apple</option>
            <option value="Microsoft">Microsoft</option>
          </select><br/>
          <label htmlFor='JobTitle'>Job Title</label><br/>
          <select placeholder="Job Title"
            id="job"
            name="job"
            value={form.job}
            onChange={handleChange}>
            <option value="None">Select Job Title</option>
            <option value="Freshman Internship">Freshman Internship</option>
            <option value="Sophomore Internship">Sophomore Internship</option>
            <option value="Junior Internship">Junior Internship</option>
            <option value="Senior Internship">Senior Internship</option>
            <option value="Starting-Level Job (Front-End)">Starting-Level Job (Front-End)</option>
            <option value="Starting-Level Job (Back-End)">Starting-Level Job (Back-End)</option>
          </select><br/>
          <label htmlFor='Name'>Name</label><br/>
          <textarea
                 value={form.name}
                 placeholder="Enter your name"  
                 id="name" 
                 name="name" 
                 autoComplete="off"
                 onChange={handleChange}>
          </textarea><br/>
          <label htmlFor='Email'>Valid School Email</label><br/>
          <textarea
                 value={form.email}
                 placeholder="Enter your valid school email"
                 id="email" 
                 name="email" 
                 autoComplete="off"
                 onChange={handleChange}>
          </textarea><br/>
          <label htmlFor='review'>Review</label><br/>
          <div class="review-box"><textarea
                 value={form.review}
                 placeholder="Give feedback"  
                 id="review" 
                 name="review" 
                 autoComplete="off"
                 onChange={handleChange}>
          </textarea></div><br/>
          <SubmitButton onClick={handleSubmit}>
            Submit
          </SubmitButton>
    </form>
  )
}

export default Form