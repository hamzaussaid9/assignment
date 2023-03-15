import React from 'react'
import { useNavigate } from 'react-router-dom'; 
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h3>Welcome, lets do some action</h3>
        <button onClick={()=>navigate('/create')}>Create Post</button>
        <button onClick={()=>navigate('/posts')}>See All Posts</button>
    </div>
  )
}

export default Home