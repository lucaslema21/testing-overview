import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import {useQuery, gql} from '@apollo/client'

const GET_CARPINCHOS = gql`
  {
    carpinchos {
      data {
        id
        name
        image
      }
    }
  }
`;
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {data} = useQuery(GET_CARPINCHOS);
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    if (data) {
      setProducts(data.carpinchos.data)
    }
  }, [data])


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
