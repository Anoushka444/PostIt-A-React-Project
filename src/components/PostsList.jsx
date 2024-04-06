import classes from './PostsList.module.css';
import Learnprops from './Learnprops';
import NewPost from './NewPost';
import { useState } from 'react';



function PostsList(){
    const [enteredBody, setEnteredBody]=useState('');

    const[enteredAuthor,setenteredAuthor]=useState('');

function bodyChangeHandler(event)
{
    setEnteredBody(event.target.value);
}

function authorChangeHandler(event)
{
    setEnteredAuthor(event.target.value);
}
return(
    <>
    <NewPost onBodyChange={bodyChangeHandler} onAuthodChange={authorChangeHandler}/>
<ul className={classes.posts}>
    <Learnprops author={enteredAuthor} bookName={enteredBody}  />
    <Learnprops author="Chetan's book" bookName="abc'"/>
    <Learnprops author="Akshita's book" bookName="Hii" />
</ul>
</>
);

}

export default PostsList;