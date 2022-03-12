import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"


 const Users = () => {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [user, setUser]=useState(null)

    const URL = "http://localhost:4000/user";

    const getUsers = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUser(data);
    };

    const createUsers = async (user) => {
        //make post request to create user
        await fetch(URL + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(user), 
        });
        // update list of users
        getUsers();
    };

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        createUsers(newForm);
        setNewForm({
            name: "",
            email: "",
            password: "",
        });
    };
    // loaded function
    const loaded = () => {
        return user.map((user) => (
            <div key={user._id} className="user">
                <Link to={`/users/${user._id}`}><h1>{user.name}</h1></Link>
                <img src={user.image} alt={user.name} />
                <h3>{user.password}</h3>
            </div>
        ));
    };

   return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.email}
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.password}
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <input type="submit" value="Create User" />
            </form>
        </section>
    );
}

export default Users;
