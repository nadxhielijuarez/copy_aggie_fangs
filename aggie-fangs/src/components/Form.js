import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import loadingGif from "../images/loading.gif"

const database_id = '22f238cc864e4a1496e42e3d8a2c05c6';
//const secretKey = 'secret_AFKZAuWeh8KSRFU7dK4vcdUTEQG1pb3CyQtwBIdj9Ws'

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
  const [tags, setTags] = useState(null);
  const[selectedValue, setSelectedValue] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/tags',{
    method: "GET"
  }).then(response => {
    if (response.type === 'opaque' || response.ok) {
        response.json().then(revItems => {
          setTags(revItems)
      });
    } 
  }).catch(error => {
    console.log("Error is: ", error)
  });
  },[]);

  const handleRemovedTag = e => {
    //
  }

  const handleChange = e => {
    const{name, value} = e.target;
    setForm({...form, [name]: value});
    //console.log("Form is set to: ", form)
  }

  
  const handleSelectedChange = e => {
    console.log("selected change detected")
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : ["empty"]);
    console.log("selectedValue",selectedValue)
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
  
  if(tags == null){
    return(
      <div>
      <img src={loadingGif} alt="wait until the page loads" />
      <h1>Loading...</h1> 
    </div>
    )

  } else {
    return (  
      <form className="form" onSubmit={handleSubmit}>
          <h2>Share Your Experience</h2>
            <label htmlFor='Company'>Company</label><br/>
            <textarea
                   value={form.company}
                   placeholder="Enter company name"  
                   id="company" 
                   name="company" 
                   autoComplete="off"
                   onChange={handleChange}>
            </textarea><br/>

            <label htmlFor='JobTitle'>Job Title</label><br/>
            <Multiselect
              id="job"
              name="job"
              value={tags.filter(obj => selectedValue.includes(obj))}
              onSelect={handleSelectedChange}
              onRemove={handleRemovedTag}
              options = {tags}
              displayValue = "name"
              /><br/>
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

  
}

export default Form