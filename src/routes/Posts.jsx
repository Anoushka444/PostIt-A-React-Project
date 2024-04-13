
import {Outlet} from 'react-router-dom'
import NewPost from './NewPost';
import Learnprops from '../components/Learnprops'
import PostsList from '../components/PostsList';
import { useState } from 'react';

function Posts() {
  const [ModalIsVisible, setModalIsVisible]= useState(false);
  

  
  return (
    <>
        <Outlet/>
    <main>
  
    <PostsList />
      </main>
</>
);


}
export default Posts;
export async function loader(){
      
  const response=await  fetch('http://localhost:8080/posts')
  const resData=await response.json();
  return resData.posts;
}