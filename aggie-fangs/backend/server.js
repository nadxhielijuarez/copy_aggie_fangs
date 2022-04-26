// form-tool-backend/server.js
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const { makeConsoleLogger } = require('@notionhq/client/build/src/logging')
const { Console } = require('console')
const app = express()
const port = 3002

const secretKey = 'secret_AFKZAuWeh8KSRFU7dK4vcdUTEQG1pb3CyQtwBIdj9Ws'
NOTION_DATABASE_ID = '22f238cc864e4a1496e42e3d8a2c05c6'
//email type: email
NOTION_EMAIL_ID = 'S%3AUR'
//name type: rich text
NOTION_NAME_ID = 'Tqov'
//tag type: multi_select
NOTION_TAG_ID = '%5C~%7Cf'
//down votes type: number
NOTION_DVOTES_ID = 'g~OQ'
//description type: rich text
NOTION_DESCRIPTION_ID = 'h%5Da%3E'
//up votes type: number
NOTION_UPVOTES_ID = 'k_Eb'
//title type: title
NOTION_TITLE_ID = 'title'


app.use(express.urlencoded({extended: true })); 

app.use(express.json());   
//properties: myProperties
//const myProperties = 
// What we'll pass into axios
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${secretKey}`,
  'Notion-Version': '2022-02-22'
}


app.get('/:database_id', async (req, res) => {
  const { database_id } = req.params;
  res.header("Access-Control-Allow-Origin", "*");
  const resp = await axios({
    method: 'GET',
    url: 'https://api.notion.com/v1/databases/' + database_id,
    headers
  });
  return res.json(resp.data)
})

/* route that allows us to enter info into the feedback form */
app.post('/:database_id' , async (req, res) => {
  const { database_id } = req.params
  /* weird behaviour  */
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData) //actual object is now obtained
  /* corrected the wierd behavior*/
  const { title, description, userEmail, name, tag} = data
  res.header("Access-Control-Allow-Origin", "*");
  await axios({
    method: 'POST',
    url: 'https://api.notion.com/v1/pages',
    headers,
    data: {
      parent: { database_id },
      properties: {
        'Company Name': {
          title: [
            {
              type: "text",
              text: {
                content:title,
              },
            },
          ],
        },
        'S%3AUR': {
          email : userEmail
        },
        'Tqov': {
          rich_text: [
            {
              type: "text",
              text: {
                content: name,
              },
            },
          ],
        },
        'h%5Da%3E': {
          rich_text: [
            {
              type: "text",
              text: {
                content: description,
              },
            },
          ],
        },
        'g~OQ': {
          number: 0,
        },
        'k_Eb': {
          number: 12,
        },
        '%5C~%7Cf': {
          multi_select: [
            {
              id:tag
            }
          ],
        },
        
    }
    }
  })
  
})


/*
translate: 
async function getSuggestions() {
  const notionPages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [{ property: process.env.NOTION_VOTES_ID, direction: "descending" }],
  })

*/

/* app.post(':/', async (req, res) => {
  const { database_id } = req.params
  const response = await axios({
    method: 'POST',
    url: 'https://api.notion.com/v1/databases/22f238cc864e4a1496e42e3d8a2c05c6/query',
    headers,
    data: {page_size: 100}
  })
  console.log("the response is---->", response)
})
 */
app.use(cors({
  origin: ['http://localhost:3002'],
  credentials: true
}))


app.listen(port, () => {
  console.log(`On port ${port}`)
})

