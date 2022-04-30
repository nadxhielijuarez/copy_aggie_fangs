import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import loadingGif from "../images/loading.gif";

const ProbButton = styled.button `
  cursor: pointer;
  background-color: rgb(75, 0, 130);
  width: 100%;
  padding: 15px 15px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: "Lucida Console", "Courier New", monospace;
  align-self: left;
  left: 0;
  margin-top: 10px;
  margin-bottom: 0;
`

function CodingProblemList () {
  const [codeProbArr, setcodeProbArr] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3002/getCodeProb',{
    method: "GET"
  }).then(response => {
    if (response.type === 'opaque' || response.ok) {
        response.json().then(codeProbsObjs => {
          setcodeProbArr(codeProbsObjs)
      });
    } 
  }).catch(error => {
    console.log("Error is: ", error)
  });
  },[]);

  function changeCurrentProblem (objID) {

    /* -------------- Get problem info by id here -------------- */

    var probTitle = "String Reversal";
    var probConcepts = objID;
    var probPrompt = objID;
    var probCompany = localStorage.getItem("this-company");

    
    localStorage.setItem("problem-title", probTitle);
    localStorage.setItem("problem-concepts", probConcepts);
    localStorage.setItem("problem-prompt", probPrompt);
    localStorage.setItem("problem-company", probCompany);
    window.location.reload();
  }

  var problemList = new Array();
  var thisCompany = localStorage.getItem("this-company");
  // id, title, prompt, concepts, company
  if(codeProbArr != null){
    codeProbArr.map(codeObj => {
      problemList.push((!thisCompany.localeCompare(codeObj.company) || thisCompany == "None") ?
      (<div>
        <ProbButton onClick={() => {changeCurrentProblem(codeObj.id)}}>{codeObj.title} ({codeObj.company})</ProbButton>
      </div>)
      : null)
    })
  } else {
    problemList.push(<img src={loadingGif} alt="wait until the page loads"/>)
  }
  
  // check if problemList is full of null values
  var isEmpty = true;
  for (let i = 0; i < problemList.length; i++) {
    if (problemList[i] != null) {
      isEmpty = false;
      break;
    }
  }
  if (isEmpty) {
    problemList.push(<body>There are currently no problems related to this company.</body>)
  }
  return (
    <div className='show-problems'>
      <h1>Problems:</h1>
      {problemList}
    </div>
  )
}

export default CodingProblemList