
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateChallenge from './Components/CreateChallenge';
import Main from './Components/Main';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>

    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/main" element={<Main />}>
        </Route>
        <Route exact path="/details" element={<CreateChallenge />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
