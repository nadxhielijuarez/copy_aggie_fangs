const { Client } = require("@notionhq/client")

const NOTION_API_KEY = 'secret_AFKZAuWeh8KSRFU7dK4vcdUTEQG1pb3CyQtwBIdj9Ws'
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

const notion = new Client({ auth:  NOTION_API_KEY })

async function getTags() {
  const database = await notion.databases.retrieve({
    database_id:  NOTION_DATABASE_ID,
  })
  var prop = database.properties
  var idProp = notionPropertiesById(prop)
  var items = idProp[NOTION_TAG_ID].multi_select
  var sorted = items.options.map(tag => {
      return{
        id: tag.id,
        name: tag.name
      }
  })
 // console.log("my tags are->",sorted)
  return(sorted)

  /* return notionPropertiesById(database.properties)[NOTION_TAG_ID].multi_select.options.map(option => {
    return { id: option.id, name: option.name }
  }) */
}

function notionPropertiesById(properties) {
  return Object.values(properties).reduce((obj, property) => {
    const { id, ...rest } = property
    return { ...obj, [id]: rest }
  }, {})
}

function createSuggestion({ title, description, userEmail, name, tag}) {
  notion.pages.create({
    parent: {
      database_id:  NOTION_DATABASE_ID,
    },
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
              id: tag
            }
          ],
        },
        
    }



  })
}

async function getSuggestions() {
    const response = await notion.databases.query({
        database_id:  NOTION_DATABASE_ID,
        sorts: [{ property: NOTION_UPVOTES_ID , direction: "ascending" }],
      })
  return response.results.map(fromNotionObject)
}

function fromNotionObject(notionPage) {
  const propertiesById = notionPropertiesById(notionPage.properties)

  return {
    id: notionPage.id,
    title: propertiesById[ NOTION_TITLE_ID].title[0].plain_text,
    upVotes: propertiesById[ NOTION_UPVOTES_ID].number,
    downVots: propertiesById[ NOTION_UPVOTES_ID].number,
    name: propertiesById[NOTION_NAME_ID].rich_text[0].text.content,
    tags: propertiesById[ NOTION_TAG_ID].multi_select[0].name,
    description:
      propertiesById[ NOTION_DESCRIPTION_ID].rich_text[0].text
        .content,
    email: propertiesById[NOTION_EMAIL_ID].email,
  }
}

async function upVoteSuggestion(pageId) {
  const suggestion = await getSuggestion(pageId)
  const votes = suggestion.votes + 1
  await notion.pages.update({
    page_id: pageId,
    properties: {
      [ NOTION_VOTES_ID]: { number: votes },
    },
  })

  return votes
}

async function getSuggestion(pageId) {
  return fromNotionObject(await notion.pages.retrieve({ page_id: pageId }))
}

module.exports = {
  createSuggestion,
  getTags,
  getSuggestions,
  upVoteSuggestion,
}