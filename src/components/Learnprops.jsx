import classes from './Post.module.css';
//const names = ['Anoushka', 'Chetan']



function Learnprops({author, body}) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}

export default Learnprops;