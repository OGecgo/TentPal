import { useState } from 'react';
// oi selides mou
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  // orizw se poia selida eimai mesa apo to setCurrentPage
  const [currentPage, setCurrentPage] = useState("home");
  // to callw otan thelw na paw se alli selida
  const navigate = (page) => {
    setCurrentPage(page);
  };
  // to kalw otan thelw na paw se alli selida kai tis stelnw to navigate mesa apo to onoma navigate
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home navigate = {navigate}/>;
      case "login":
        return <Login navigate = {navigate}/>;
      default:
        return <Home navigate={navigate} />;
    }
  };
  return (
    <div>
      {renderPage()}
    </div>
  );
}
export default App;