import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
    <Router>
    <Sidebar/>
    </Router>
    </div>
  );
}

export default App;
