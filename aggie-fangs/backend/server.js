// form-tool-backend/server.js
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const { makeConsoleLogger } = require('@notionhq/client/build/src/logging')
const { createSuggestion, getDB, getSuggestions, getTags } = require('./notion')
const { getByDisplayValue } = require('@testing-library/react')
const app = express()
const port = 3002

const secretKey = 'secret_AFKZAuWeh8KSRFU7dK4vcdUTEQG1pb3CyQtwBIdj9Ws'
const { Client } = require("@notionhq/client")
const notion = new Client({ auth:  secretKey })
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

/* axios version */
app.get('/', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const resp = await axios({
    method: 'GET',
    url: 'https://api.notion.com/v1/databases/22f238cc864e4a1496e42e3d8a2c05c6',
    headers
  });
  return res.json(resp.data)
})

/* same but with sdk */
/* Grabbing info from front-end example:     
const [db, setDB] = useState({});
    useEffect(() => {
      fetch('http://localhost:3002/DB').then(async (resp) => {
        setDB(await resp.json())
      });
    }, []);
   console.log("*db is now==-->", db)
 */
app.get('/DB', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await notion.databases.retrieve({database_id: NOTION_DATABASE_ID })
  return res.json(response);

})

/* route that allows us to enter info into the feedback form */
app.post('/sendFeedback' , async (req, res) => {
  const  database_id  = '22f238cc864e4a1496e42e3d8a2c05c6'
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
          number: 0,
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
/* route to enter feedback Uses the notionSDK !! */
app.post('/sendFeedback1', async(req, res) => {
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData) //actual object is now obtained
  /* corrected the wierd behavior*/
  const { title, description, userEmail, name, tag} = data
  res.header("Access-Control-Allow-Origin", "*");
  await createSuggestion({title, description, userEmail, name, tag })
})

/* Route to get tags */
app.get('/tags', async(req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const database = await getTags();
  return res.json(database)
})

/* Route for getting the feedback reviews */
app.get('/getReviews' , async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await getSuggestions()
  console.log("the response is----->", response)
  return res.json(response)
})

app.use(cors({
  origin: ['http://localhost:3002'],
  credentials: true
}))


app.listen(port, () => {
  console.log(`On port ${port}`)
})

