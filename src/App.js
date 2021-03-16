import "./App.css";
import Header from "./compos/Header";
import Home from "./compos/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./compos/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
