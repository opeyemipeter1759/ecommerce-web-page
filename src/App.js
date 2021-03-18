import "./App.css";
import Header from "./compos/Header";
import Home from "./compos/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./compos/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            
          </Route>
          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
