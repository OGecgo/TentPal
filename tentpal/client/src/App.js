import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
// oi selides mou
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SingUp from "./pages/SingUp";

import ChoosePosition from "./pages/CreatTent/ChoosePosition";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/choosePosition" element={<ChoosePosition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;