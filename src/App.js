import logo from './logo.svg';
import './App.css';

import Nav from './components/Navigation/Nav';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <div>
     
      <Nav/>
      <Hero/>
      <Home/>
      <About/>
      
    </div>
  );
}

export default App;
