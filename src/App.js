import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
import './App.css';
import VendingMachine from './VendingMachine';
import Cucumbers from "./Cucumbers";
import Macadamias from "./Macadamias";
import Salmon from "./Salmon";
import Papaya from "./Papaya";
import SnapPeas from "./SnapPeas";

function App() {
  return (
    <div className="App">
      <nav class="navbar">I am your navbar</nav>
      <div className="container max-width: 100% content-wrap">
      {/* <img src="../public/vending-machine.png" alt="vending machine icon"/>   */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/cucumbers" element={<Cucumbers name="cucumbers" homeLink={<NavLink to='/'>Back to Vending Machine</NavLink>}/>}></Route>
          <Route path="/macadamias" element={<Macadamias name="macadamia nuts" homeLink={<NavLink to='/'>Back to Vending Machine</NavLink>} />}></Route>
          <Route path="/salmon" element={<Salmon name="smoked salmon"  homeLink={<NavLink to='/'>Back to Vending Machine</NavLink>}/>}></Route>
          <Route path="/papaya" element={<Papaya name="papaya"  homeLink={<NavLink to='/'>Back to Vending Machine</NavLink>}/>}></Route>
          <Route path="/snappeas" element={<SnapPeas name="snap peas"  homeLink={<NavLink to='/'>Back to Vending Machine</NavLink>}/>}></Route>  
        </Routes>     
      </BrowserRouter>
      </div>
      <footer className="main p-2">Photo by <a href="https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Gold</a> on <a href="https://unsplash.com/s/photos/healthy-foods?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </footer>
    </div>
  );
}

export default App;
