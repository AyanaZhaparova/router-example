import './App.css';
import About from "./About/About"
import Contacts from "./Contacts/Contacts"
import Home from "./Home/Home"
import { Route } from "react-router"
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contakts">Contacts</Link>
      
       
      <Route path="/about" component = {About}/>
      <Route path="/contakts" component = {Contacts}/>
      <Route path="/" component = {Home} exact/>
     
      
    </div>
  );
}

export default App;