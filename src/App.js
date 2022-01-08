import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home />}></Route>
          <Route path='*' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
