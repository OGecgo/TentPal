import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
// oi selides mou
import Home from './pages/Home/Home';
import Login from './pages/LoginForm/Login';
import NotFound from './pages/NotFound/NotFound';

import SelectLocation from "./pages/SelectLocation/SelectLocation";
import SetStakes from "./pages/SetStakes/SetStakes";
import ChooseTent from "./pages/ChooseTent/ChooseTent";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/selectLocation" element={<SelectLocation />} />]
        <Route path="/setStakes" element={<SetStakes />} />
        <Route path="/chooseTent" element={<ChooseTent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;