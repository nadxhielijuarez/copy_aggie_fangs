import React, { useEffect, useState } from "react";

function FeedbackView(){
    const [reviewInfo, setReviewInfo] = userState({});
    fetch('http://localhost:3002/getReviews',{
        method: "GET"
      }).then(response => {
       console.log(response)
       if (response.type === 'opaque' || response.ok) {
           response.json().then(revItems => {
           console.log("Redid call---->",revItems);
           setReviewInfo(revItems)
           return revItems
         });
       } 
     }).catch(error => {
       console.log("Error is: ", error)
     });

     return(
         <div>
             <h1>My review on{revItems[0].title}</h1>
             <h2>description: {revItems[0].description}</h2>


         </div>
     )

}

export default FeedbackView;