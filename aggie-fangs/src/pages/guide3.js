import React from 'react'
import logo from "./../images/Aggie_Fangs_Logo_Transparent.png";
import styled from "styled-components";
import {Link } from "react-router-dom";

const LinkButton = styled.button `
  cursor: pointer;
  background-color: rgb(100, 0, 0);
  width: 200px;
  height: 90px;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 23px;
  font-family: "Lucida Console", "Courier New", monospace;

  overflow-x: hidden;
  float: left;
  margin-right: 20px;
`

function Guide3 () {
    return (
        <div>
            <div class="guide-header">
                <h1>Technical Interviews</h1>
                <h2>Guides:</h2>
                <Link to="/guide1"><LinkButton>
                    Application Guide
                </LinkButton></Link>
                <Link to="/guide2"><LinkButton>
                    Personality Interviews
                </LinkButton></Link>
                <Link to="/guide3"><LinkButton>
                    Technical Interviews
                </LinkButton></Link>
            </div>
        </div>
    );
}

export default Guide3