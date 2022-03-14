import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function Show(props) {
    const id = useParams()
    // const users = props.users

    // console.log(users)

    const [user, setUser] = useState([]);
    const getUserData = async () => {
        const response = await fetch(`http://localhost:4000/user/${id}`);
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setUser(data);
    };
    useEffect(() => getUserData(), []);
    const person = user.find(u => u._id === id)

    return (
        <div className="person">
            <h2>Users</h2>
            <img src={user.image} alt={user.name} />
        </div>
    )
}

export default Show