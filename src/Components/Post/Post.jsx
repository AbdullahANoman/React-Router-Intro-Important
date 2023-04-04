import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const navigate = useNavigate();
    const handleGoForward = () =>{
        navigate(`/post/${post.id}`)
    }
    return (
        <div className='post'>
          <h4>Tittle :  {post.title}</h4>
          <h3>Id : {post.id}</h3>
          <Link to={`/post/${post.id}`}><button>Show  Details</button></Link>
          <button className='btn' onClick={handleGoForward}>Show Post Details</button>
        </div>
    );
};

export default Post;