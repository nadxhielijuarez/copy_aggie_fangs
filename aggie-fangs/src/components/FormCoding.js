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

var dbAddress = localStorage.getItem("db-address");

const FormCoding = ({formCd, setFormCd}) => {


    const handleChange = e => {
        const{name, value} = e.target;
        setFormCd({...formCd, [name]: value});
    }
    const checkValidity = () => {
        // todo
        return true;
    }
    const handleSubmit = e => {
        fetch(dbAddress + '/addCodeProb', {
            mode:'no-cors',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify({
                company: formCd.company,
                probTitle:formCd.name,
                concepts: formCd.concepts,
                probPrompt:formCd.prompt,
            }) 
          });
        if (checkValidity()) {
            alert("The input data is good!");
        } else {
            alert("Please enter valid information.")
        }
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Submit A Coding Problem</h2>
            <label htmlFor='Company'>Which Company Asked This Question?</label><br/>
            <select placeholder="Company Name"
                id="company"
                name="company"
                value={formCd.company}
                onChange={handleChange}>
                <option value="None">Select Company</option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Amazon">Amazon</option>
                <option value="Netflix">Netflix</option>
                <option value="Apple">Apple</option>
                <option value="Microsoft">Microsoft</option>
                <option value="N/A">N/A</option>
            </select><br/>

            <label htmlFor='Name'>Problem Name</label>
            <textarea
                 value={formCd.name}
                 placeholder="Enter problem title"  
                 id="name" 
                 name="name" 
                 autoComplete="off"
                 onChange={handleChange}>
            </textarea><br/>

            <label htmlFor='Concepts'>Concepts Covered</label>
            <textarea
                value={formCd.concepts}
                placeholder="What concepts does this problem cover?"  
                id="concepts" 
                name="concepts" 
                autoComplete="off"
                onChange={handleChange}>
            </textarea><br/>
          
            <label htmlFor='prompt'>Problem Prompt</label><br/>
            <div class="review-box"><textarea
                    value={formCd.prompt}
                    placeholder="Enter problem prompt"  
                    id="prompt" 
                    name="prompt" 
                    autoComplete="off"
                    onChange={handleChange}>
            </textarea></div><br/>

            <SubmitButton >
                Submit
            </SubmitButton>
        </form>
    )
}

export default FormCoding