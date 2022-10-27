
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Features from './Components/Features';
import Search_Bar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Search_Bar />
    </div>
  );
}

export default App;
