import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
// import { post, user } from '../../../backend/controllers';

const Posts = () => {

  const [newForm, setNewForm] = useState({
    user: "",
    comment: "",
    date: "",
  });
  const [post, setPost]=useState(null)
  
  const URL = "http://localhost:4000/posts";

  const getPosts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPost(data);
  };

  const createPosts = async (post) => {
    await fetch(URL + "/new_post", {
      method: "POST",
      headers: {
        "Content-type": "application/json",        
      },
      body: JSON.stringify(post),
    });
    getPosts();
  };

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPosts(newForm);
    setNewForm({
      user: "",
      text: "",
      likes: "",
      comment: "",
      date: "",
    });
  };

  const loaded = () => {
    return post.map((post) => (
      <div key={post._id} className="post">
        <Link to={`/posts/${post._id}`}><h1>{post.name}</h1></Link>
        <img src={post.image} alt={post.name} />
      </div>
    ));
  };

  

return (
  
  <section>
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.user}
        name="user"
        placeholder="user"
        onChange={handleChange}
      />
      <input
        type="string"
        value={newForm.comment}
        name="comment"
        placeholder="comment"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.date}
        name="date"
        placeholder="date"
        onChange={handleChange}
      />
      <input type="submit" value="Create Post" />

    </form>
    <h2>We're working hard to bring you this feature very soon!</h2>    
    <div className='post'>
      <img src="https://i.pinimg.com/originals/6c/67/ce/6c67ce1557d591b11d36100307ad5c30.gif" alt="construction"/>
    </div>
  </section>
);
}
 
export default Posts;