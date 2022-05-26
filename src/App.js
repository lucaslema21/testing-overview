import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [bkgColor, setBkgColor] = useState('red')

  return (
    <div className="App">
      <button style={{backgroundColor: bkgColor}} onClick={() => setBkgColor('blue')}>Change to {bkgColor === 'red' ? 'blue' : 'red'}</button>
    </div>
  );
}

export default App;
