import classes from './NewPost.module.css';



function NewPost(props) {
   // const [EnteredBody,setEnteredBody]=useState('');  this is a React Hook, multiple built in functions in react are ther. 



  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>

        <textarea id="body" required rows={5} onChange={props.onBodyChange}/>
      </p>
      
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;