import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
// oi selides mou
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;