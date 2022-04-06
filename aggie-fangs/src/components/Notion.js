import React, {useState, useEffect} from "react";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("/notion/").then(res => {
            if(res.ok) {
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
export default Users;