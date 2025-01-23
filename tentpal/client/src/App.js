import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
// oi selides mou
import Home from './pages/Home/Home';
import Login from './pages/LoginForm/Login';
import NotFound from './pages/NotFound/NotFound';
import SingUp from "./pages/LoginForm/SingUp";

import SelectLocation from "./pages/SelectLocation/SelectLocation";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/selectLocation" element={<SelectLocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;