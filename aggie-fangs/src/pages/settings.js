import React from 'react';
import App from "./../App";

const Settings = () => {

  const thisStyle = "style1";
  function changeCSS () {
      //alert("Changing Style");
      if (thisStyle == "style1") {
          thisStyle = "style2";
      } else {
          thisStyle = "style1";
      }
      window.location.reload();
  }
  const getStyle = () => {
      if (thisStyle == undefined) {
          return "style1";
      }
      return thisStyle;
  }

  return (
    <div class="settings-page">
        <div class="company-section">
            <h1>Settings</h1>
            <body>
                Color Scheme:<button onClick={changeCSS}>change</button>
            </body>
        </div>
    </div>
  )
}

export default Settings