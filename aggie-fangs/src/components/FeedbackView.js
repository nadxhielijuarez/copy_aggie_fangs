import React, { useEffect, useState } from "react";
import loadingGif from "../images/loading.gif"

function FeedbackView({company}){
    const [reviewInfo, setReviewInfo] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3002/getReviews',{
        method: "GET"
      }).then(response => {
       if (response.type === 'opaque' || response.ok) {
           response.json().then(revItems => {
           setReviewInfo(revItems)
         });
       } 
     }).catch(error => {
       console.log("Error is: ", error)
     });
    },[]);

    
    if(reviewInfo == null){
        return(
            <div>
                <h1>Loading...</h1> 
                <loadingGif></loadingGif>
            </div>
        )
    } else {
        console.log("reviewInfo: ", reviewInfo)
        var rev1 = reviewInfo[0]
        var revTitle = rev1.title
        var revDesc = rev1.description
        console.log("*First elem:", rev1)
        console.log("attributes", revTitle)
        return(
            <div>
                <h1>My interview with {revTitle}</h1>
                <h2>description: {revDesc} </h2>
            </div>
        )
    }

}

export default FeedbackView;