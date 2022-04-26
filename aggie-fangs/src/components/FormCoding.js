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

const FormCoding = ({FormCoding, codingItems, setFormCoding, setCodingItems}) => {
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
        <form>
            
        </form>
    )
}

export default FormCoding