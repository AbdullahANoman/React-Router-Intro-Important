import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    return (
        <div className='friends'>
            <h2>Name :  {friend.name}</h2>
            <h4>Email :  {friend.email}</h4>
            <h5>Address : {friend.address.street}</h5>
            <Link to={`/friend/${friend.id}`}><button>Show Me Details</button></Link>
        </div>
    );
};

export default Friend;