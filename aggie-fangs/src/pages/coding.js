import React from 'react'
import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
import styled from "styled-components";

const RunButton = styled.button `
  cursor: pointer;
  background-color: rgb(75, 0, 130);
  width: 100px;
  height: 50px;
  padding: 5px 15px;
  border-radius: 8px;
  color: white;
  font-size: 13px;
  font-family: "Lucida Console", "Courier New", monospace;
`

var probName = <text></text>;
var probConcepts = <text></text>;
var probPrompt = <text></text>;
var probInOut = <text></text>;

function getProblem () {
    // todo
    // this function will find the current problem and change what the page will output accordingly
    probName = <text>String Reversal</text>;
    probConcepts = <text>Traversal of Lists or Strings, Basic Problem Solving</text>;
    probPrompt = <text>Given a string, write a function that reverses the string such that the old first element is now the last element, the old second element is now the second to last element, etc.</text>;
    probInOut = <text>In: apple<br/>Out: elppa<br/>In: howdy<br/>Out: ydwoh</text>;
}

function changeProblem () {
    // todo
}

function submitCode () {
    // todo
}

function Coding() {
    getProblem();
    return (
        <div>
            <div class="coding coding-header">
                <div class="split coding-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div class="split coding-problem-name">
                    <h1>Problem Name: {probName}</h1>
                    <h2>Concepts Covered: {probConcepts}</h2>
                </div>
            </div>
            <div class="coding coding-main">
                <div class="split problem-list">
                    <h1>Problems:</h1>
                    <label>
                        <input type="checkbox" /> Sort By Company
                    </label>
                    <ul>
                        <li><a href="" onClick={changeProblem()}>String Reversal</a></li>
                    </ul>
                </div>
                <div class="split problem-statement">
                    <h2>Problem Prompt:</h2>
                    <body>{probPrompt}</body>
                    <h2>Sample Inputs and Outputs:</h2>
                    <body>{probInOut}</body>
                    <h2>Your Code:</h2>
                    <div class="coding-problem-left">
                        <textarea class="code-window" id="userCode" name="userCode"/>
                        <RunButton>Run Code</RunButton>
                    </div>
                    <div class="coding-problem-right">
                        <textarea disabled class="compiler-window" id="terminal" name="terminal">
                            Terminal Output
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coding