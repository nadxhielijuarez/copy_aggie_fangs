const { getDatabase } = require('@notionhq/client/build/src/api-endpoints')
//const notion = require('../notion')




exports.defaultController = (req, res) =>{
    res.json({
     usersList: ["user 0", "user 1"]
    })
}

exports.notionDefaultDB = (req, res) => {
    res.send("Hello, its express!");
}
//this is where the api responses are posted!