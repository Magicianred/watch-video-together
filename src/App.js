import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages 
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/"/>
      </Switch>
    </Router>
  )
}

export default App;
