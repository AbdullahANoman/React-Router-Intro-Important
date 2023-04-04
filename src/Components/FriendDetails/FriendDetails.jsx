import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Name : {friend.name}</h1>
            <h1>User Name  : {friend.username}</h1>
        </div>
    );
};

export default FriendDetails;