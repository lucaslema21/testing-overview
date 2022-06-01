import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3030/carpinchos')
      .then(rta => {
        setProducts(rta.data.data)
      })
  }, [])

  const deleteCarpinchoHandler = (id) => {
    const filteredProducts = products.filter(prod => prod.id !== id);
    setProducts(filteredProducts)
  }

  return (
    <div className="App">
      <Header isLogged={isLoggedIn} onLoginToggle={(e) => setIsLoggedIn(e)}/>
      {products && <Products prods={products} isLogged={isLoggedIn} onDeleteCarpincho={deleteCarpinchoHandler}/>}
    </div>
  );
}

export default App;
