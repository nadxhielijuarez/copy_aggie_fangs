import React, {useState, useEffect} from "react";



/*  function Notion() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("/notion/").then(res => {
            if(res.ok) {
                console.log("the response was ok");
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes.usersList))
    }) 

    return (<div>
        {"THIS THE BACKEND"}
        {users.map(user =><li>{users} </li>)}
    </div>)
} 
 */

export default NotionFeedback;