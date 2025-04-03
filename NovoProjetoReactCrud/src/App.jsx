import { useState } from 'react';
import Home from './page/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount  = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Home />
      <div>
       <h1>Contador {count}</h1>
        <button onClick={incrementCount}>Incrementar</button>
      </div>
        

    
    </>
  );
}

export default App;