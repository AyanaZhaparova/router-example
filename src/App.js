import About from './About/About';
import './App.css';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      
      <a href={ <About />}></a>
      <a href={ <Contacts />}></a>
      <a href={ <Home />}></a>
    
     
    </div>
  );
}

export default App;
