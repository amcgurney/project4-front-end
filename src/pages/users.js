import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"

 const Users = (props) => {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createUsers(newForm);
        setNewForm({
            name: "",
            email: "",
            password: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.users.map((user) => (
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
            {/* {props.users ? loaded() : loading()} */}
        </section>
    );
    return newForm ? loaded(): <h1>Loading...</h1>;
}

export default Users;
