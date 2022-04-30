import React, { Component } from 'react'
import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
import styled from "styled-components";
import codeProb from "./codingProb"

const RunButton = styled.button `
  cursor: pointer;
  background-color: rgb(75, 0, 130);
  width: 100px;
  height: 50px;
  padding: 5px 15px;
  border-radius: 8px;
  color: white;
  text-align: center;
  font-size: 13px;
  font-family: "Lucida Console", "Courier New", monospace;
  align-self: left;
  left: 0;
`

var probName = <text></text>;
var probConcepts = <text></text>;
var probPrompt = <text></text>;
var probInOut = <text></text>;
var problemList = new Array();

class Coding extends Component {
    getProblem () {
        // todo
        // this function will find the current problem and change what the page will output accordingly
        probName = <text>String Reversal</text>;
        probConcepts = <text>Traversal of Lists or Strings, Basic Problem Solving</text>;
        probPrompt = <text>Given a string, write a function that reverses the string such that the old first element is now the last element, the old second element is now the second to last element, etc.</text>;
        probInOut = <text>In: apple<br/>Out: elppa<br/>In: howdy<br/>Out: ydwoh</text>;
    }
    getProblemList() {
        // populate problemLis
        fetch('http://localhost:3002/getCodeProb',{
            method: "GET"
        }).then(response => {
            if (response.type === 'opaque' || response.ok) {
                response.json().then(codeProbsObjs => {
                console.log(codeProbsObjs)
            });
            } 
        }).catch(error => {
            console.log("Error is: ", error)
        });
        
    }
    handleChange(event) {
        var thisCompany = event.target.value;
        localStorage.setItem("this-company", thisCompany);
        this.setState({
            selectedOption: thisCompany
        });

        fetch('http://localhost:3002/getCodeProb',{
            method: "GET"
        }).then(response => {
            if (response.type === 'opaque' || response.ok) {
                response.json().then(codeProbsObjs => {
                console.log(codeProbsObjs)
            });
            } 
        }).catch(error => {
            console.log("Error is: ", error)
        });
    }
    constructor() {
        super();
        var thisCompany = localStorage.getItem("this-company");
        if (!thisCompany) {
            thisCompany = "None";
        }
        this.state = {
            name: "react",
            selectedOption: thisCompany
        };
        this.handleChange = this.handleChange.bind(this);
        this.getProblemList();
        this.getProblem();
    }
    render() {
/*         const [probList, setProbList] = useState(null);
        const[selectedValue, setSelectedValue] = useState([])
      
        useEffect(() => {
          fetch('http://localhost:3002/getCodeProb',{
          method: "GET"
        }).then(response => {
          if (response.type === 'opaque' || response.ok) {
              response.json().then(revItems => {
                setProbList(revItems)
            });
          } 
        }).catch(error => {
          console.log("Error is: ", error)
        });
        },[]); */
        return (
            
            <div>
                <codeProb/>
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
                        <form className='problem-sort'>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "None"
                                        checked = {this.state.selectedOption === "None"}
                                        onChange = {this.handleChange}
                                    />
                                    None
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Google"
                                        checked = {this.state.selectedOption === "Google"}
                                        onChange = {this.handleChange}
                                    />
                                    Google
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Facebook"
                                        checked = {this.state.selectedOption === "Facebook"}
                                        onChange = {this.handleChange}
                                    />
                                    Facebook
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Amazon"
                                        checked = {this.state.selectedOption === "Amazon"}
                                        onChange = {this.handleChange}
                                    />
                                    Amazon
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Netflix"
                                        checked = {this.state.selectedOption === "Netflix"}
                                        onChange = {this.handleChange}
                                    />
                                    Netflix
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Apple"
                                        checked = {this.state.selectedOption === "Apple"}
                                        onChange = {this.handleChange}
                                    />
                                    Apple
                                </label>
                            </div>
                            <div className='radio'>
                                <label>
                                    <input
                                        type = "radio"
                                        value = "Microsoft"
                                        checked = {this.state.selectedOption === "Microsoft"}
                                        onChange = {this.handleChange}
                                    />
                                    Microsoft
                                </label>
                            </div>
                        </form>

                        <ul>
                            <li><a href="">String Reversal</a></li>
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
                            <RunButton class="run-button">Run Code</RunButton>
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
}

export default Coding;