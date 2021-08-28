import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Team from './components/Team';
import IncidentForm from './components/IncidentForm';
import IncidentsList from './components/IncidentsList';

function App() {


  return (
    <div className="App">
     
  
      <Router>
       <Nav/>
      <Switch>
        
        <Route exact path="/">
          <Home/>
          
       </Route>

       <Route exact path="/Lawyers">
          <Team/>
        </Route>

        <Route exact path="/incidents/new">
         <IncidentForm/>
        </Route>

        <Route exact path="/incidents/:id">
          <IncidentsList />
        </Route>

      </Switch>

      </Router>
    </div>
  );
}

export default App;
