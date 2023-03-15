import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const CreatePost = (createPost) => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: '',
        description: ''
    })
    const handleChange = (name, value) => {
        setPost((post)=>({...post, [name]: value}))
    }
    const handleSave = async () =>{
        await createPost(post);
        navigate('/');
        alert('post has been created');
    } 
  return (
    <form onSubmit={handleSave}>
        <h3>Create Post</h3>
        <span>Title: </span>
       <input placeholder='title' name='title' value={post.title} onChange={(e)=>handleChange(e.target.name, e.target.value)} required/> <br /><br />
       <span>Description: </span>
       <textarea placeholder='description' name='description' value={post.description} onChange={(e)=>handleChange(e.target.name, e.target.value)} required /> 
       <br />
       <button onClick={()=>navigate('/')}>Go Back</button>
       <button type='submit'>Create Post</button>
    </form>
  )
}

export default CreatePost