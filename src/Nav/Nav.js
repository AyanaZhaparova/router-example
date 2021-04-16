
import { NavLink } from 'react-router-dom';

import classes from "./Nav.module.css";

const Nav = () => {
    return ( 
        <div className={classes.Nav}>
         
    <ul>

    <li><NavLink activeClassName="active" to="/" exact>Home</NavLink></li>
    <li><NavLink activeClassName="active" to="/new">NEW</NavLink></li>
    <li><NavLink activeClassName="active" to="/catalog">Catalog</NavLink></li>
    <li><NavLink activeClassName="active" to="/sale">Sale</NavLink></li>
    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    <li><NavLink activeClassName="active" to="/contacts">Contacts</NavLink></li>
    <li><NavLink activeClassName="active" to="/auth">Auth</NavLink></li>
    <li><NavLink activeClassName="active" to="/posts">Posts</NavLink></li>

      </ul>
    
        </div>
     );
}
 
export default Nav;