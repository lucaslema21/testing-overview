import React from 'react';
import Product from './Product/Product';
import styles from './Products.module.css'

const Products = ({prods, isLogged, onDeleteCarpincho}) => {
    return (
        <div className={styles.products}>
            {prods.map(prod => (
                <Product key={prod.id} prod={prod} isLoggedIn={isLogged} onDeleteCarpincho={onDeleteCarpincho} />
            ))}
        </div>
    )
}

export default Products;