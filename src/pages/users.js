// import React from 'react'
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

// const Users = () => {
//     // state to hold formData
//     const [newForm, setNewForm] = useState({
//         name: "",
//         email: "",
//         password: "",
//     });
//     const [user, setUser]=useState(null)

//     const URL = "http://localhost:4000/user";

//     const getUsers = async () => {
//         const response = await fetch(URL);
//         const data = await response.json();
//         setUser(data);
//     };

//     const createUsers = async (user) => {
//         //make post request to create user
//         await fetch(URL + "/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         body: JSON.stringify(user), 
//         });
//         getUsers();
//     };

//     const deleteUsers = async (user) => {
//         await fetch(URL + "/:id", {
//             method: "DELETE",
//             headers: {
//                 "Content-type": "application/json",              
//             },
//             body: JSON.stringify(user),
//         });
//         deleteUsers();
//     };

//     // handleChange function for form
//     const handleChange = (event) => {
//         setNewForm({ ...newForm, [event.target.name]: event.target.value });
//     };

//     // handle submit function for form
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         createUsers(newForm);
//         setNewForm({
//             name: "",
//             email: "",
//             password: "",
//         });
//     };
//     // loaded function
//     const loaded = () => {
//         return user.map((user) => (
//             <div key={user._id} className="user">
//                 <Link to={`/users/${user._id}`}><h1>{user.name}</h1></Link>
//                 <img src={user.image} alt={user.name} />
//                 <h3>{user.password}</h3>
//             </div>
//         ));
//     };

//    return (
//         <section>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={newForm.name}
//                     name="name"
//                     placeholder="name"
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     value={newForm.email}
//                     name="email"
//                     placeholder="email"
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     value={newForm.password}
//                     name="password"
//                     placeholder="password"
//                     onChange={handleChange}
//                 />
//                 <input type="submit" value="Create User" />
//                 <input type="delete" value="Delete User" />
//             </form>
//         </section>
//     );
// }

// export default Users;

import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
function User(props) {
  const [user, setUser] = useState([]);
    const getUserData = async () => {
        const response = await fetch(props.URL + "/user");
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setUser(data);
    };
    const createUser = async (user) => {
        await fetch(props.URL + "/user", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(user),
        });
        getUserData();
    };
    useEffect(() => getUserData(), []);
    // state to hold formData
    const [newUser, setNewUser] = useState({
        name: "",
        image: "",
        bio: "",
        email: "",
        password: ""
    });
    // handleChange function for form
    const handleChange = (event) => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value });
    };
    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(newUser);
        setNewUser({
            name: "",
            image: "",
            bio: "",
            email: "",
            password: ""
        });
    };
    // loaded function
    const loaded = () => {
        return user.map((user) => (
            <div key={user._id} className="user">
                <Link to={`/user/${user._id}`}><h1>{user.name}</h1></Link>
                <h3>{user.name} </h3>
                <h3>{user.iamge}</h3>
            </div>
        ));
    };
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newUser.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newUser.email}
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newUser.password}
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <input type="submit" value="Create User" />
            </form>
            {user ? loaded() : loading()}
        </section>
    );
}
export default User;
