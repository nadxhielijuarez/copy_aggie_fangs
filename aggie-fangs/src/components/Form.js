import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import axios from 'axios';
import { getJSDocTags } from 'typescript';

const database_id = '22f238cc864e4a1496e42e3d8a2c05c6';
//const secretKey = 'secret_AFKZAuWeh8KSRFU7dK4vcdUTEQG1pb3CyQtwBIdj9Ws'

const SubmitButton = styled.button `
  cursor: pointer;
  background-color: rgb(100, 0, 0);
  padding: 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: center;
`
const Form = ({form, reviews, setForm, setReviews}) => {
    const [db, setDB] = useState({});
    useEffect(() => {
      fetch('http://localhost:3002/DB').then(async (resp) => {
        setDB(await resp.json())
      });
    }, []);
   console.log("*db is now==-->", db)


  const handleChange = e => {
    const{name, value} = e.target;
    setForm({...form, [name]: value});
  }
  const sendInfo = e => {
    // todo
  }
  const checkValidity = () => {
    // todo
    return true;
  }
  const handleSubmit = e => {
    fetch('http://localhost:3002/sendFeedback1', {
      mode:'no-cors',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: JSON.stringify({
        title: form.company,
        name: form.name,
        userEmail: form.email,
        description: form.review,
        tag: form.job
      }) 
    });
/*  if (checkValidity()) {
      alert("The input data is good!");
      e.preventDefault();
      setReviews([...reviews, form]);
      setForm({company: "", review: "", id: uuidv4()});
    } else {
      alert("Please enter valid information.")
    } */
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
            <option value="5a3e9bad-c55e-4eaf-8902-9f52e1b60add">Freshman Internship</option>
            <option value="dcd6f86c-e02e-42af-aac7-b1f2d13e9465">Sophomore Internship</option>
            <option value="812fb902-5d3f-41cd-9051-bc7958b7be28">Junior Internship</option>
            <option value="2613dbd9-0db3-4250-8edd-52426cbe1139">Senior Internship</option>
            <option value="a762320d-c829-447a-9d91-c3d2d8385331">Starting-Level Job (Front-End)</option>
            <option value="19f052cf-d7fe-4f9f-954d-ebb135b44489">Starting-Level Job (Back-End)</option>
            <option value="058ec567-3406-40d5-a9b6-08f46394873f">Software Engineering</option>
            <option value="9bf8df2f-0b86-4755-b955-c35d19003d3d">QA Engineering</option>
            <option value="b2ef6f52-4148-4938-9075-c8eb0f843d29">full-stack</option>
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
          <SubmitButton >
            Submit
          </SubmitButton>
    </form>
  )
}

export default Form