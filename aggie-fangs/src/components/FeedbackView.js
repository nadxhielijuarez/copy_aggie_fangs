import React, { useEffect, useState } from "react";
import loadingGif from "../images/loading.gif";
import upimg1 from "../images/up1.png";
import upimg2 from "../images/up2.png";
import downimg1 from "../images/down1.png";
import downimg2 from "../images/down2.png";

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
    function upVote (id) {
        // do something with the id of the review
    }
    function downVote (id) {
        // do something with the id of the review
    }

    
    if(reviewInfo == null){
        return(
            <div>
                <img src={loadingGif} alt="wait until the page loads"/>
            </div>
        )
    } else {
        console.log("reviewInfo: ", reviewInfo)
        var rev1 = reviewInfo[5]
        var revTitle = rev1.title
        var revDesc = rev1.description
        console.log("*First elem:", rev1)
        console.log("attributes", revTitle)

        var reviewList = new Array();

        var upImage = <img src={upimg2} alt="upvote" align="left"/>
        // if statement to change which up image to use based on whether the user has voted
        var downImage = <img src={downimg2} alt="upvote" align="right"/>
        // if statement to change which down image to use

        reviewInfo.map( singleReviewItem => (
            reviewList.push(<div className="reviewBox">
                <h3>Name: {singleReviewItem.name} / {singleReviewItem.title}</h3>
                <h3>Tags: </h3>
                <body>
                    {singleReviewItem.description}
                </body>
                <div class="votes up">
                    <a onClick={upVote}>{upImage}</a>{singleReviewItem.upVotes}
                </div>
                <div class="votes down">
                    <a onClick={downVote}>{downImage}</a>{singleReviewItem.downVots}
                </div>
            </div>)
        ));

        return(
            <div>
                {reviewList}
            </div>
        )
    }

}

export default FeedbackView;