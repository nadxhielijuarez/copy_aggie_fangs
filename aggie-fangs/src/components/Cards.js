import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function Cards() {
  return (
    <div className='cards'>
        <h3>Companies</h3>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItems src= "images/googleLogo.png" text="Interview Prep for Google" label = "Google" path = "/googlePrep"/>
                    <CardItems src= "images/facebookLogo.png" text="Interview Prep for Facebook" label = "Facebook" path = "/facebookPrep"/>
                    <CardItems src= "images/amazonLogo.png" text="Interview Prep for Amazon" label = "Amazon" path = "/amazonPrep"/>
                </ul>
                <ul className='cards__items'>
                    <CardItems src= "images/netflixLogo.png" text="Interview Prep for Netflix" label = "Netflix" path = "/netflixPrep"/>
                    <CardItems src= "images/appleLogo.png" text="Interview Prep for Apple" label = "Apple" path = "/applePrep"/>
                    <CardItems src= "images/microsoftLogo.png" text="Interview Prep for Microsoft" label = "Microsoft" path = "/microsoftPrep"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards