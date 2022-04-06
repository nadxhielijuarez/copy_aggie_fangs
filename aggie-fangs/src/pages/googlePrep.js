import React from 'react'
import Form from '../components/Form'
import Users from "../components/Notion"

//const database_id = process.env.REACT_APP_NOTION_DATABASE_ID
const googlePrep = () => {
  return (
    <div>
        <h1>Google Interview Feedback</h1>
        <Form/>
        <Users/> 
    </div>
  )
}

export default googlePrep