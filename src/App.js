import './App.css';

import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import Catalog from "./Catalog/Catalog";
import Sale from "./Sale/Sale";
import New from "./New/New";
import Auth from "./Auth/Auth";
import Posts from "./Posts/Posts";
import Nav from "./Nav/Nav";

import { Route, Switch } from "react-router";




function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
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
     
      
    </div>
  );
}

export default App;