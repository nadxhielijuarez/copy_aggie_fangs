import React from 'react';
import App from "./../App";

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