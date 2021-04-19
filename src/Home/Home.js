import classes from "./Home.module.css";

import image1 from "./../images/image1.jpg";
import image2 from "./../images/image2.jpg";
import image3 from "./../images/image3.jpg";

import { Link } from "react-router-dom";


const Home = () => {
    return (
        
        <div className={classes.Home}>
        <Link className={classes.News} to="/new">NEW</Link>

            <div className={classes.header}>
            <Link to="/suits"><h2>Suits</h2><img src={image1}/></Link>
            <Link to="/dresses">Dresses<img src={image2}/></Link>
            <Link to="/bestsellers">Our bestsellers<img src={image3}/></Link>
            
            </div>
        </div>
    );
}

export default Home;