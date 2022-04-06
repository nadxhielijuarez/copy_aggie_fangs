import React, {useState, useEffect} from "react";
const {Client} = require('@notionhq/client')

const notion = new Client({auth: process.env.NOTION_API_KEY})

function Notion() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("/notion/").then(res => {
            if(res.ok) {
                //console.log("the response was ok");
                return res.json()
            }else{
                return ""
            }
        }).then(jsonRes => setUsers(jsonRes.usersList))
    })

    return (<div>
        {"THIS THE BACKEND"}
        {users.map(user =><li>{user} </li>)}
    </div>)
}
export default Notion;