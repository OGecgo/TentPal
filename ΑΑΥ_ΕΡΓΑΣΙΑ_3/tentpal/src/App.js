import { useState } from 'react';

// my pages
import Home from './pages/Home';
import Html from './pages/Html';
import Login from './pages/Login';



function App() {
  // remember what page we are
  const [currentPage, setCurrentPage] = useState("home");

  // save the page we want to go to
  const navigate = (page) => {
    setCurrentPage(page);
  };

  // render the page we are on
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home navigate = {navigate}/>;
      case "Html":
        return <Html navigate = {navigate}/>;
      case "Login":
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
