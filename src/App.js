import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "./components/Content/Content";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/series">
          <Series />
        </Route>
        <Route exact path="/content/:id">
          <Content />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
