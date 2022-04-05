import React from 'react'
import Form from '../components/Form'
require('dotenv').config
const express = require('express')


const googlePrep = () => {
  return (
    <div>
        <h1>Google Interview Feedback</h1>
        <Form/>
    </div>
  )
}

export default googlePrep