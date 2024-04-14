import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts'
import './index.css'
import Post from './components/Post.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Learnprops from './components/Learnprops.jsx'
import NewPost, {action as newPostAction} from './routes/NewPost.jsx';
import PostDetails , {loader as PostDetailsLoader }from './routes/PostDetails.jsx';
import RootLayout from './routes/RootLayout.jsx';

const router_config_object=createBrowserRouter([
  {
    path:'/', 
    element:<RootLayout/> , 
    children:[
      //all the routes you want to have, list of all routes u want to have
  {path: '/', element: <Posts/>, 
  loader: postsLoader,
  children:[
    { path:'/create-post', element: <NewPost/> , action: newPostAction}  ,          //this is the main route
    { path: '/:postid', element: <PostDetails/>, loader: PostDetailsLoader}   //this postid is a placeholder for ids, kind of like how many ids of the POst will be there in future, we dont know. 
    //This is how we set dynamic path
  ],
},
  ],
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router_config_object}/>

  </React.StrictMode>,
)
