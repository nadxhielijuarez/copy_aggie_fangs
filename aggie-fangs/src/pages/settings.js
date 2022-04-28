import React from 'react';
import App from "./../App";
import styled from "styled-components";

const ColorSchemeButton = styled.button `
  cursor: pointer;
  background-color: var(--btncolor);
  padding: 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  color: var(--btntxtcolor);
  font-size: 40px;
  font-family: "Lucida Console", "Courier New", monospace;
  overflow-x: hidden;
`

const Settings = () => {
  function changeCSS () {
      var thisStyle = localStorage.getItem("current-style");
      if (thisStyle == "style1") {
          thisStyle = "style2";
      } else {
          thisStyle = "style1";
      }
      localStorage.setItem("current-style", thisStyle);
      window.location.reload(false);
  }

  var currentScheme = <text>Light Mode</text>;
  var thisStyle = localStorage.getItem("current-style");
  if (thisStyle == "style2") {
    currentScheme = <text>Dark Mode</text>;
  }

  return (
    <div class="settings-page">
        <div class="company-section settings-menu">
            <h1>Settings</h1>
            <body>
                Color Scheme:<ColorSchemeButton onClick={changeCSS}>{currentScheme}</ColorSchemeButton>
            </body>
        </div>
    </div>
  )
}

export default Settings