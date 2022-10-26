
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Hero';
import Stats from './Components/Stats';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}

export default App;
