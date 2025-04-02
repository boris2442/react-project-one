import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Onne from "./Onne";
import Boutique from "./Boutique";
import Arrivage from "./Arrivage";
import Contact from "./Contact";
import Footer from "./Footer";
import MentionLegales from "./MentionLegales";
import ConditionDeVente from "./ConditionDeVente";
// function App() {
//   return (
//     // <Router>
//     <div className="App">
//       <Navbar />
//       <Home />
//       <Onne />
//       <Boutique />
//       <Arrivage />
//       <Contact />
//       <Footer />
//     </div>
//   );
//   // } />
//   // <Route exact path="/contact" element={
//   //
//   // } />
//   // </Routes>

//   {
//     /* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */
//   }
//   {
//     /* </header> */
//   }

//   // </Router>
// }
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
          <Onne/>
          <Boutique/>
          <Arrivage/>
          <Contact/>
        <Routes>
          
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Onne />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/arrivage" element={<Arrivage />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/mentionLegales" element={<MentionLegales />} />
          <Route path="/conditiondevente" element={<ConditionDeVente />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
