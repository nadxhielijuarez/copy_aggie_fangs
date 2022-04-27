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

const FormLC = ({formLC, setFormLC}) => {
    const handleChange = e => {
        const{name, value} = e.target;
        setFormLC({...formLC, [name]: value});
    }
    const checkValidity = () => {
        // todo
        return false;
    }
    const handleSubmit = e => {
        if (checkValidity()) {
            alert("The input data is good!");
        } else {
            alert("Please enter valid information.")
        }
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Submit A LeetCode Link</h2>

            <label htmlFor='Company'>Company</label>
            <textarea
                 value={formLC.company}
                 placeholder="Enter company name"  
                 id="company" 
                 name="company" 
                 autoComplete="off"
                 onChange={handleChange}>
            </textarea><br/>

            <label htmlFor='Name'>Name</label>
            <textarea
                value={formLC.name}
                placeholder="Enter problem name"  
                id="name" 
                name="name" 
                autoComplete="off"
                onChange={handleChange}>
            </textarea><br/>

            <label htmlFor='Link'>Link</label>
            <textarea
                value={formLC.link}
                placeholder="Enter LeetCode Link"  
                id="link" 
                name="link" 
                autoComplete="off"
                onChange={handleChange}>
            </textarea><br/><br/>

            <SubmitButton >
                Submit
            </SubmitButton>
        </form>
    )
}

export default FormLC