import './App.css';

import About from "./About/About";
import Auth from "./Auth/Auth";
import Bestsellers from "./Bestsellers/Bestsellers";
import Catalog from "./Catalog/Catalog";
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import LookBook from "./LookBook/LookBook";
import Nav from "./Nav/Nav";
import New from "./New/New";
import Posts from "./Posts/Posts";
import Sale from "./Sale/Sale";
import Soon from "./Soon/Soon";
import Dresses from "./Clothes/Dresses/Dresses";
import Suits from "./Clothes/Suits/Suits";

import { Route, Switch } from "react-router";


function App() {
  return (
    <div className="App">
      <Nav />
      
      <div className="content">
     <Switch>
      <Route path="/about" component = {About}/>
      <Route path="/auth" component = {Auth}/>
      <Route path="/bestsellers" component = {Bestsellers}/>
      <Route path="/catalog" component = {Catalog} />
      <Route path="/contacts" component = {Contacts}/>
      <Route path="/" component = {Home} exact/> 
      <Route path="/lookbook" component = {LookBook}/>
      <Route path="/new" component = {New} />
      <Route path="/posts" component = {Posts}/>
      <Route path="/sale" component = {Sale} />
      <Route path="/soon" component = {Soon}/>
      <Route path="/dresses" component = {Dresses}/>
      <Route path="/suits" component = {Suits}/>

      <Route path="/" render={() => <h1>Page not found</h1>} />
     
      </Switch>
       </div>
     
      
    </div>
  );
}

export default App;