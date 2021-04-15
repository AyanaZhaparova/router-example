import './App.css';

import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import Sale from "./Sale/Sale";
import New from "./New/New";
import Auth from "./Auth/Auth";

import { Route } from "react-router";
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <nav>
     <ul>
      <Link to="/new"><li>NEW</li></Link>
      <Link to="/home"><li>Home</li></Link>
      <Link to="/catalog"><li>Catalog</li></Link>
      <Link to="/sale"><li>Sale</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/contacts"><li>Contacts</li></Link>
      <Link to="/auth"><li>Auth</li></Link>
      </ul>
      </nav>

      <Route path="/new" component = {New} />
      <Route path="/home" component = {Home} />
      <Route path="/catalog" component = {Catalog} />
      <Route path="/sale" component = {Sale} />
      <Route path="/about" component = {About}/>
      <Route path="/contacts" component = {Contacts}/>
      <Route path="/auth" component = {Auth}/>
      
      
      
     
      
    </div>
  );
}

export default App;