import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Menu     from './pages/Menu/Menu';
import NotFound from './pages/NotFound/NotFound';

// create tent
import SelectLocation from "./pages/SelectLocation/SelectLocation";
import SetStakes      from "./pages/SetStakes/SetStakes";

// home interface
import Home           from "./pages/Home/Home"
import Order          from "./pages/Order/Order";
import EnergyPanel    from "./pages/EnergyPanel/EnergyPanel";
import LightPanel     from "./pages/LightPanel/LightPanel";
import SetTent        from "./pages/SetTent/SetTent";



 

function App() {

  return (


    
    <BrowserRouter>
      <Routes>
        <Route index         element={<Menu     />} />
        <Route path="/menu"  element={<Menu     />} />
        <Route path="*"      element={<NotFound />} />

        <Route path="/selectLocation" element={<SelectLocation />} />
        <Route path="/setStakes"      element={<SetStakes      />} />

        <Route path="/Home"        element={<Home        />} />
        <Route path="/order"       element={<Order       />} />
        <Route path="/energyPanel" element={<EnergyPanel />} />
        <Route path="/lightPanel"  element={<LightPanel  />} />
        <Route path="/setTent"     element={<SetTent     />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;