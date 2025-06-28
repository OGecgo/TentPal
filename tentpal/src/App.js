import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
// oi selides mou
import Home from './pages/Home/Home';
import Login from './pages/LoginForm/Login';
import NotFound from './pages/NotFound/NotFound';


import Order from "./pages/CreateTent/Order/Order";
import EnergyPanel from "./pages/CreateTent/EnergyPanel/EnergyPanel";
import LightPanel from "./pages/CreateTent/LightPanel/LightPanel";
import SelectLocation from "./pages/CreateTent/SelectLocation";
import SetStakes from "./pages/CreateTent/SetStakes/SetStakes";
import ChooseTent from "./pages/CreateTent/ChooseTent/ChooseTent";



 

function App() {

  return (


    
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />


        <Route path="/order" element={<Order />} />
        <Route path="/energyPanel" element={<EnergyPanel />} />
        <Route path="/lightPanel" element={<LightPanel />} />
        <Route path="/selectLocation" element={<SelectLocation />} />
        <Route path="/setStakes" element={<SetStakes />} />
        <Route path="/chooseTent" element={<ChooseTent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;