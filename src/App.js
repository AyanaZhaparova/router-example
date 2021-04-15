import './App.css';

import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import Sale from "./Sale/Sale";
import New from "./New/New";
import Auth from "./Auth/Auth";
import Posts from "./Posts/Posts";

import { Route, Switch } from "react-router";
import { Link, NavLink } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <nav>
     <ul>
      <li>
        <NavLink activeClassName="active" to="/" exact>
         Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/new">
         NEW
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/catalog">
        Catalog
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/sale">
        Sale
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
        About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contacts">
        Contacts
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/auth">
        Auth
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/posts">
        Posts
        </NavLink>
      </li>
      </ul>
      </nav>

     <Switch>
      <Route path="/" component = {Home} exact/> 
      <Route path="/new" component = {New} />
      <Route path="/catalog" component = {Catalog} />
      <Route path="/sale" component = {Sale} />
      <Route path="/about" component = {About}/>
      <Route path="/contacts" component = {Contacts}/>
      <Route path="/auth" component = {Auth}/>
      <Route path="/posts" component = {Posts}/>
      <Route path="/" render={() => <h1>Page not found</h1>} />
      
      </Switch>
      
     
      
    </div>
  );
}

export default App;