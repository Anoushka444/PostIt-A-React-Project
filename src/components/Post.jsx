import classes from'./Post.module.css';

const names = ['Anoushka', 'Chetan']



function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        <li>
            <p> Reactjs is awesome</p>
        </li>
    );
}

export default Post;