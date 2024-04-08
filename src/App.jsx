
import './App.css'
import NewPost from './components/NewPost';
import Learnprops from './components/Learnprops'
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [ModalIsVisible, setModalIsVisible]= useState(false);
  

  function showModalHandler(){
setModalIsVisible(true);
  }
  function HiDEModalHandler()
{
setModalIsVisible(false);
}
  
  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
    <PostsList isPosting={ModalIsVisible} 
    onStopPosting={HiDEModalHandler}/>
      </main>
</>
);


}
export default App;
