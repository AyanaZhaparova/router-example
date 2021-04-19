import classes from "./Dresses.module.css";

import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.jpg";
import image11 from "../../images/image11.jpg";
import image12 from "../../images/image12.jpg";

import { Link } from "react-router-dom";

const Dresses = () => {
    return (
        <div className={classes.Dresses}>
            <h1>On this page you can take a look at our new products</h1>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            <img src={image5}/>
            <img src={image6}/>
            <img src={image7}/>
            <img src={image8}/>
            <img src={image9}/>
            <img src={image10}/>
            <img src={image11}/>
            <img src={image12}/>

            <Link to="/home" exact>Back</Link>
        </div>
    );
}

export default Dresses;