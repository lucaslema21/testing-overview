import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [styles, setStyles] = useState({
    backgroundColor: 'red'
  })

  return (
    <div className="App">
      <button style={styles} onClick={() => setStyles({backgroundColor: 'green'})}>Change to blue</button>
    </div>
  );
}

export default App;
