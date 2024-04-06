import classes from './Post.module.css';
//const names = ['Anoushka', 'Chetan']



function Learnprops(props) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.bookName}</p>
        </li>
    );
}

export default Learnprops;