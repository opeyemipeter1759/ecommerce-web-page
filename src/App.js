import "./App.css";
import Header from "./compos/Header";
import Home from "./compos/Home";


function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* body */}
      <Home/>
    </div>
  );
}

export default App;
