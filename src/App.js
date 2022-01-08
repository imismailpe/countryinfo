import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home, Login } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/home'><Home /></Route>
          <Route exact path='*'><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
