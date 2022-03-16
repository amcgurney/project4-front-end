import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";


function Show(props) {
    const id = useParams()
    console.log(id);

    const [user, setUser] = useState([]);
    const getUserData = async () => {
        const response = await fetch(`https://proj4-bckend.herokuapp.com/user`);
        const data = await response.json();
        const match  = data.find(u => u._id === id.id)
        setUser(match   );
    };
    const updateUser = async (user, id) => {
        await fetch(props.URL + "user/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        // update list of people
        getUserData()
    }


    const [editForm, setEditForm] = useState(user)

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        updateUser(editForm, user._id)
    }

    const deleteUser = async id => {
        await fetch(props.URL + "user/" + id, {
            method: "delete",
        })
        getUserData();
    };

    const removeUser = () => {
        deleteUser(user._id)
        // props.history.push("/")
    }

    function loading() {
        return (
            <div className="person">
                <h2>Users</h2>
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Bio: {user.bio}</h3>
                <img src={user.image} alt={user.name} />
                
                <form class="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.bio}
                    name="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Image"
                    onChange={handleChange}
                />

                <input type="submit" value="Update Person" />
                <button class="button" id="delete" onClick={removeUser}>Delete</button>
            </form>
            </div>
        )
    }

    function notloading() {
      return (
        <h1>nothing loaded</h1>
      )  
    }

    useEffect(() => getUserData(), []);

    return user ? loading():notloading()
}

export default Show