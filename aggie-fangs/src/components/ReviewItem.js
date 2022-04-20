import React from 'react'
import { FaTrash} from "react-icons/fa"
const ReviewItem = ({handleDelete, review}) => {
  return (
    <div className='reviewItem'>
        <h2>{review.company}</h2>
        <p>{review.review}</p>
        <div>
            <button onClick={() => handleDelete(review.id)}>
                <FaTrash/>
            </button>
        </div>
    </div>
  )
}

export default ReviewItem