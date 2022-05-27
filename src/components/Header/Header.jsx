import React from 'react';
import styles from './Header.module.css'

const Header = ({isLogged, onLoginToggle}) => {

    const toggleLoginHandler = () => {
        onLoginToggle(!isLogged)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1>Carpincho Store</h1>
                <button className={styles.loginButton} onClick={toggleLoginHandler}>{isLogged ? 'Logout' : 'Login'}</button>
            </div>
        </header>
    )
}

export default Header