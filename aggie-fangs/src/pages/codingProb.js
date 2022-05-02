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

var dbAddress = localStorage.getItem("db-address");

function CodingProblemList ({onClick}) {
  const [codeProbArr, setcodeProbArr] = useState(null);
  useEffect(() => {
    fetch(dbAddress + '/getCodeProb',{
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

  const [singleCode, setSingleCode] = useState(null);
  const [id, setId] = useState('4648e3b4-35b3-4d8d-8f80-eab40a24adff'); //this is a random exisiting problem, for microsoft
  /*Set microsoft as default to corespond to first problem */
  useEffect(() => {
    fetch(dbAddress + '/codingProb/' + id,{
    method: "GET"
  }).then(response => {
    if (response.type === 'opaque' || response.ok) {
        response.json().then(codingProblem => {
          setSingleCode(codingProblem)
      });
    } 
  }).catch(error => {
    console.log("Error is: ", error)
  });
  },[]);
  console.log("singleCoding Problem with given id is: ", singleCode)


    var probTitle = "None Selected";
    var probConcepts = "N/A";
    var probPrompt = "N/A";
    var probCompany = "N/A";
    var codeProb = null;
    if (codeProbArr != null) {
      codeProbArr.map(codeObj => {
        codeProb = (codeObj.id === objID) ?
          codeObj :
          codeProb
      })
    }
    if (codeProb) {
      probTitle = codeProb.title;
      probConcepts = codeProb.concepts;
      probPrompt = codeProb.prompt;
      probCompany = codeProb.company;
    }


    localStorage.setItem("problem-title", probTitle);
    localStorage.setItem("problem-concepts", probConcepts);
    localStorage.setItem("problem-prompt", probPrompt);
    localStorage.setItem("problem-company", probCompany);
    window.location.reload();
  

  var problemList = new Array();
  var thisCompany = localStorage.getItem("this-company");
  // id, title, prompt, concepts, company
  if(codeProbArr != null){
    codeProbArr.map(codeObj => {
      problemList.push((!thisCompany.localeCompare(codeObj.company) || thisCompany == "None") ?
      (<div>
        <ProbButton onClick={() => {
          changeCurrentProblem(codeObj); 
        console.log("codeobj is:", codeObj)
      }}>{codeObj.title} ({codeObj.company })</ProbButton>
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