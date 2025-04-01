import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Onne from "./Onne";
import Boutique from "./Boutique";
import Arrivage from "./Arrivage";
function App() {
  return (
    // <Router>
    <div className="App">
      <Navbar />
      <Home />
    <Onne />
    <Boutique />
    <Arrivage/>
 
    </div>
  );
  // } />
          // <Route exact path="/contact" element={
          // 
        // } />
        // </Routes>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* </header> */}
     
    // </Router>
}

export default App;
