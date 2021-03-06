import classes from "./Bestsellers.module.css";

import image1 from "../images/image1.jpg";
import image2 from "./../images/image2.jpg";
import image3 from "./../images/image3.jpg";
import image4 from "./../images/image4.jpg";
import image5 from "./../images/image5.jpg";
import image6 from "./../images/image6.jpg";
import image7 from "./../images/image7.jpg";
import image8 from "./../images/image8.jpg";
import image9 from "./../images/image9.jpg";
import image10 from "./../images/image10.jpg";
import image11 from "./../images/image11.jpg";
import image12 from "./../images/image12.jpg";

import { Link } from "react-router-dom";

const Bestsellers = () => {
    return (
        <div className={classes.Bestsellers}>
            <h1>On this page you can take a look at our new products</h1>
            <img alt={image} src={image1}/>
            <img alt={image} src={image2}/>
            <img alt={image} src={image3}/>
            <img alt={image} src={image4}/>
            <img alt={image} src={image5}/>
            <img alt={image} src={image6}/>
            <img alt={image} src={image7}/>
            <img alt={image} src={image8}/>
            <img alt={image} src={image9}/>
            <img alt={image} src={image10}/>
            <img alt={image} src={image11}/>
            <img alt={image} src={image12}/>

            <Link to="/home" exact>Back</Link>
        </div>
    );
}

export default Bestsellers;