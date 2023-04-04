import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import First from './Components/First/First';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>I am Noman</div>,
//   },
//   {
//     path :"/app",
//     element : <App></App>
//   },
//   {
//     path : '/about',
//     element : <div>I am about page</div>
//   }
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element : <Home></Home>,
    children : [
      {
        path : '/',
        element : <First></First>
      },
      {
        path : 'friends',
        element : <Friends></Friends>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element : <FriendDetails></FriendDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path : 'about',
        element : <About></About>
      },
      {
        path: 'contact',
        element : <Contact></Contact>
      },
      {
        path: 'posts',
        element : <Posts></Posts>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path : 'post/:postId',
        element : <PostDetails></PostDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '*',
        element : <div>404 <br /> Not Found</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
