import classes from "./FullPost.module.css";
import { Link } from "react-router-dom";

const FullPost = ({match}) => {
    console.log(match)
    return ( <div className={classes.FullPost}>

        <div className={classes.main}>
            <Link className={classes.back} to='/posts'>Back</Link>
            <h1>Post {match.params.id}</h1>
        </div>
        
        <div className={classes.info}>
            <h2>Hello</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <ul className={classes.list}>
            <li>example#1</li>
            <li>example#2</li>
            <li>example#3</li>
            <li>example#4</li>
            <li>example#5</li>
            <li>example#6</li>
            <li>example#7</li>
        </ul>
    </div> );
}
 
export default FullPost;