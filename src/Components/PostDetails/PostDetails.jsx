import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    console.log(details)
    const handleGoBack = () =>{
        navigate (-1)
    }
    return (
        <div>
            <h1>{details.body}</h1>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;