import classes from './PostsList.module.css';
import Learnprops from './Learnprops';

function PostsList(){
return(
<ul className={classes.posts}>
    <Learnprops author="Anoushka's Book" bookName="Life through my lens" />
    <Learnprops author="Chetan's book" bookName="My Motivations" />
    <Learnprops author="Akshita's book" bookName="CAT" />
</ul>

);

}

export default PostsList;