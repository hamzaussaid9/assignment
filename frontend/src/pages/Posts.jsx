import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Posts = ({getPosts}) => {
    const naviagate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const posts = getPosts();
        if(posts.length > 1)
            setPosts(posts);
    },[])

  return (
    <div>
        <button onClick={()=> naviagate('/')}>Go Back</button>
        <h3>All Posts</h3>
        {
            posts.map((post, index) => (
                <div>
                    <h3>post {index}: {post.title}</h3>
                    <p>{post.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Posts