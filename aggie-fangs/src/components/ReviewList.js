import React from 'react'
<<<<<<< HEAD
import ReviewItem from './ReviewItem'
const ReviewList = ({reviews, setReviews}) => {
  const handleDelete = (id) => {
    const updatedReviews = reviews.filter(review => review.id !== id)
    setReviews(updatedReviews)
  }
  return (
    <div className='reviewList'>
      <h2>Company Reviews</h2>
      {reviews.map(review => (
        <ReviewItem key = {review.id} review={review} handelDelete={handleDelete}/>
      ))}
    </div>
=======

const ReviewList = () => {
  return (
    <div>ReviewList</div>
>>>>>>> NotionAPI
  )
}

export default ReviewList