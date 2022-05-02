// form-tool-backend/server.js
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const { makeConsoleLogger } = require('@notionhq/client/build/src/logging')
const { addOtherURL, addHackerRankURL, getCodeProbs, getURLS, downVoteReview, upVoteReview, getReview,addReview, getReviews, getTags,addCodeProb, addLeetcodeURL } = require('./notion')
const { getByDisplayValue } = require('@testing-library/react')
const app = express()
const port = 3002

const secretKey = 'secret_AFKZAuWeh8KSRFU7dK4vcdUTEQG1pb3CyQtwBIdj9Ws'
const { Client } = require("@notionhq/client")
const notion = new Client({ auth:  secretKey })
NOTION_Feedback_DATABASE_ID = '22f238cc864e4a1496e42e3d8a2c05c6'
NOTION_CodeProb_DATABASE_ID = '6874305ce7a84e0b812f48cc649e8dd9'
NOTION_LeetCodeURL_DATABASE_ID = '3cb9e25839cd4ab2abe7d189b46575d2'
NOTION_HackerRankURL_DATABASE_ID = '0698bdf32713495586b8a33be98bf48e'
NOTION_OtherURL_DATABASE_ID = '056f97d0a08240eaa197b4bcc97f2263'
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

app.use(cors({
  origin: ['http://35.208.174.43:3002'],
  credentials: true
}))
app.use(express.urlencoded({extended: true })); 

app.use(express.json());

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

   /*displaying DB info for troublshooting*/
app.get('/FeedbackDB', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await notion.databases.retrieve({database_id: NOTION_Feedback_DATABASE_ID })
  return res.json(response);

})

app.get('/codeProbDB', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await notion.databases.retrieve({database_id: NOTION_CodeProb_DATABASE_ID })
  return res.json(response);

})

app.get('/LeetCodeDB', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await notion.databases.retrieve({database_id: NOTION_LeetCodeURL_DATABASE_ID })
  return res.json(response);

})

app.get('/HackerRankDB', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await notion.databases.retrieve({database_id: NOTION_HackerRankURL_DATABASE_ID })
  return res.json(response);

})

app.get('/OtherURLDB', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await notion.databases.retrieve({database_id: NOTION_OtherURL_DATABASE_ID })
  return res.json(response);

})


/* route that allows us to enter info into the feedback form */
/* app.post('/sendFeedback' , async (req, res) => {
  const  database_id  = '22f238cc864e4a1496e42e3d8a2c05c6'
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData) //actual object is now obtained
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
  
}) */
/* route to enter feedback Uses the notionSDK !! */
app.post('/addRev', async(req, res) => {
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData) //actual object is now obtained
  /* corrected the wierd behavior*/
  console.log("data is--->", data)
  const { title, description, userEmail, name, tag} = data
  res.header("Access-Control-Allow-Origin", "*");
  await addReview({title, description, userEmail, name, tag })
})

app.post('/addCodeProb', async(req, res) => {
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData) //actual object is now obtained
  /* corrected the wierd behavior*/
  //console.log("data is--->", data)
  const { company, concepts, probTitle, probPrompt} = data
  res.header("Access-Control-Allow-Origin", "*");
  await addCodeProb({ company, concepts, probTitle, probPrompt })
})

app.post('/addLeetCode', async(req, res) => {
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData) //actual object is now obtained
  /* corrected the wierd behavior*/
  console.log("data is--->", data)
  const { company, probTitle, url} = data
  res.header("Access-Control-Allow-Origin", "*");
  await addLeetcodeURL({ company, probTitle, url })
})

app.post('/addOtherURL', async(req, res) => {
  console.log("------------->IN OTHER URL<----------")
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData) //actual object is now obtained
  /* corrected the wierd behavior*/
  console.log("data is--->", data)
  const { company, probTitle, url} = data
  res.header("Access-Control-Allow-Origin", "*");
  await addOtherURL({ company, probTitle, url })
})

app.post('/addHackerRank', async(req, res) => {
  var body = req.body //the object is listed as: { '{"title":"EMPTY TEST","email":"test@tamu.edu"}': '' } note the 1st key is the actual obj
  console.log("------------->IN HACKER RANK<----------")
  var strData = Object.keys(body)[0] //obtains the first key, currently as a string 
  var data = JSON.parse(strData)
  /* corrected the wierd behavior*/
  const { company, probTitle, url} = data
  res.header("Access-Control-Allow-Origin", "*");
  console.log("for hacker rank obj, recieved-->", strData)
  await addHackerRankURL(data)
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
  const response = await getReviews()
 // console.log("the response is----->", response)
  return res.json(response)
})

/*route for LC urls */
app.get('/getURLS/:databaseID' , async (req, res) => {
  const databaseID = req.params['databaseID']
  console.log('RECIEVED---->', databaseID)
  res.header("Access-Control-Allow-Origin", "*");
  const response = await getURLS(databaseID)
  console.log("the response for LC is----->", response)
  return res.json(response)
})

app.get('/getCodeProb' , async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const response = await getCodeProbs()
  //console.log("the response for LC is----->", response)
  return res.json(response)
})

app.get('/upVote/:id' , async (req, res) => {
  const upvoteID = req.params['id']
  console.log(" RECIEVED THIS ID-->", upvoteID)
  res.header("Access-Control-Allow-Origin", "*");
  const response = await upVoteReview(upvoteID)
 // console.log("the response is----->", response)
  return res.json(response)
})


app.get('/downVote/:id' , async (req, res) => {
  const downvoteID = req.params['id']
  console.log(" in down votes RECIEVED THIS ID-->", downvoteID)
  res.header("Access-Control-Allow-Origin", "*");
  const response = await downVoteReview(downvoteID)
 // console.log("the response is----->", response)
  return res.json(response)
})

app.get('/codingProb/:id' , async (req, res) => {
  const codeProbID = req.params['id']
  console.log(" RECIEVED THIS ID for coding problems-->", downvoteID)
  res.header("Access-Control-Allow-Origin", "*");
  const response = await getReview(codeProbID)
  console.log("the response is----->", response)
  return res.json(response)
})

app.use(cors());

app.listen(port, () => {
  console.log(`On port ${port}`)
})

