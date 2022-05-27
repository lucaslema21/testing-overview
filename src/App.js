import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [products, setProducts] = useState([
    {
      id: Math.random(),
      image: 'https://cdn.pixabay.com/photo/2019/05/05/14/02/capybara-4180603_960_720.jpg',
      name: 'Tito'
    },
    {
      id: Math.random(),
      image: 'https://www.collinsdictionary.com/images/full/capybara_346252388.jpg',
      name: 'Roque'
    },
    {
      id: Math.random(),
      image: 'https://thumbs.dreamstime.com/b/capivara-del-capybara-el-habita-savannas-y-los-bosques-densos-las-vidas-cerca-de-aguas-superficie-es-una-especie-altamente-social-146657384.jpg',
      name: 'Norberto'
    },
    {
      id: Math.random(),
      image: 'https://i.pinimg.com/550x/4a/38/95/4a38950759f9054e7e7b11c10036db19.jpg',
      name: 'Pepa Pincho'
    }
  ])

  const deleteCarpinchoHandler = (id) => {
    const filteredProducts = products.filter(prod => prod.id !== id);
    setProducts(filteredProducts)
  }

  return (
    <div className="App">
      <Header isLogged={isLoggedIn} onLoginToggle={(e) => setIsLoggedIn(e)}/>
      <Products prods={products} isLogged={isLoggedIn} onDeleteCarpincho={deleteCarpinchoHandler}/>
    </div>
  );
}

export default App;
