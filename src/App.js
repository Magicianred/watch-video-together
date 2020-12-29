import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages 
import Home from './pages/home'
import WaitRoom from './pages/waitroom'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/room"/>
        <Route exact component={WaitRoom} path="/"/>
      </Switch>
    </Router>
  )
}

export default App;
