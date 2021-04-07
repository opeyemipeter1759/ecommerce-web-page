import React, { useEffect } from "react";
import "./App.css";
import Header from "./compos/Header";
import Home from "./compos/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./compos/Checkout";
import Login from "./compos/Login";
import { auth } from "./firebase";
import { useStateValue } from "./ServiceProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
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
