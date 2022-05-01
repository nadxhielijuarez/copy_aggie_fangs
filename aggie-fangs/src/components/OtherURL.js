import React, { useEffect, useState } from "react";
import loadingGif from "../images/loading.gif";

var dbAddress = localStorage.getItem("db-address");

function OtherURL(){
    const [urls, setUrls] = useState(null);
    const databaseID = '056f97d0a08240eaa197b4bcc97f2263'
    useEffect(() => {
        fetch(dbAddress + '/getURLS/' + databaseID,{
        method: "GET"
      }).then(response => {
       if (response.type === 'opaque' || response.ok) {
           response.json().then(URLs => {
            setUrls(URLs)
         });
       } 
     }).catch(error => {
       console.log("Error is: ", error)
     });
    },[]);



    if(urls == null ){
        return(
            <div>
                <img src={loadingGif} alt="wait until the page loads"/>
            </div>
        )
    } else {
        var urlArr = new Array();
        var thisCompany = localStorage.getItem("this-company");
        /*the down vote and up votes dont display properly on some company pages */
        urls.map( urlObj=> {
            urlArr.push(
                (!thisCompany.localeCompare(urlObj.title)) ? 
                (
                    <li><a href={urlObj.url}>{urlObj.name}</a></li>
                )
                : null
            )
        });
        
        return(
            <div>
                {urlArr}
            </div>
        )
    }

}

export default OtherURL;