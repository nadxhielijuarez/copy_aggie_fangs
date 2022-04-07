const {Client} = require('@notionhq/client')

const notion = new Client({auth: process.env.NOTION_API_KEY})

console.log("IN THE NOTION.JS file", process.env.NOTION_DATABASE_ID)
async function getDatabase(){
    //console.log(process.env.NOTION_DATABASE_ID)
    const  response =  await notion.databases.retrieve({ database_id:
         process.env.NOTION_DATABASE_ID
    })
    console.log(response)

    return response
}

getDatabase()


function createSuggestion(suggestion){
    
}

