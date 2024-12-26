import './styles/App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/>*/}
      </header>
      <body>
        <HelloWold />
      </body>
    </div>
  );
}



function HelloWold(){
  const [name, setCount] = useState("world");
  const [name2, setCount2] = useState("world");

  function onClick(n){
    switch(n){
      case 1:
        setCount(name + "!")
        break;
      case 2:
        setCount2(name2 + "1")
        break;
      default:
        break;
    }
  }

  return (
    <>
    
    <button onClick={() => onClick(1)}>
      press me hasd {name}
    </button>

    <button onClick={() => onClick(2)}>
      press me hasd {name2}
    </button>

    </>
  );

}

export default App;
