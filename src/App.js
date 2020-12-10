import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import Footer from "./components/Footer"
import LifecycleClass from "./pages/LifecycleClass"
import LifecycleHooks from "./pages/LifecycleHooks"

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/lifecycle-class" activeClassName="text-blue-600">Compteur (Classe)</NavLink>
          </li>
          <li>
            <NavLink to="/lifecycle-hooks" activeClassName="text-blue-600">Compteur (Hooks)</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/lifecycle-class" component={LifecycleClass} />
        <Route path="/lifecycle-hooks" component={LifecycleHooks} />
      </Switch>
      <Footer framework="React" />
    </Router>
  );
}

export default App;
