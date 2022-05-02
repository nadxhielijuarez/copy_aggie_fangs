import React from 'react'
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

const FormLC = ({formLC, setFormLC}) => {
    const handleChange = e => {
        const{name, value} = e.target;
        setFormLC({...formLC, [name]: value});
    }
    const checkValidity = () => {
        // todo
        return true;
    }
    const handleSubmit = e => {
        console.log("formLC.urlType", formLC.urlType)
        if(formLC.urlType != undefined || formLC.urlType != "None" ){
            var urlEndPoint = dbAddress + '/add' + formLC.urlType
            console.log("Endpoint is: ", urlEndPoint)
            fetch(urlEndPoint, {
                mode:'no-cors',
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: JSON.stringify({
                    company: formLC.company,
                    probTitle:formLC.name, 
                    url:formLC.link,
                }) 
              });
        } else{
            alert("Need to enter Link Type!")
        }

          
        if (checkValidity()) {
            alert("The input data is good!");
        } else {
            alert("Please enter valid information.")
        }
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Submit A LeetCode/HackerRank/Other Link</h2>

            <label htmlFor='Company'>Company</label><br/>
            <select placeholder="Company"
                id="company"
                name="company"
                value={formLC.company}
                onChange={handleChange}>
                <option value="None">Select Company</option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Amazon">Amazon</option>
                <option value="Netflix">Netflix</option>
                <option value="Apple">Apple</option>
                <option value="Microsoft">Microsoft</option>
            </select><br/>

            <label htmlFor='urlType'>Link Type?</label><br/>
            <select placeholder="Link Type"
                id="urlType"
                name="urlType"
                value={formLC.urlType}
                onChange={handleChange}>
                <option value="None">Select Link Type</option>
                <option value="LeetCode">LeetCode</option>
                <option value="HackerRank">HackerRank</option>
                <option value="OtherURL">Other (article or general)</option>
            </select><br/>
            
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
                placeholder="Enter LeetCode/HackerRank/Other Link"  
                id="link" 
                name="link" 
                autoComplete="off"
                onChange={handleChange}>
            </textarea><br/><br/>

            <SubmitButton>
                Submit
            </SubmitButton>
        </form>
    )
}

export default FormLC