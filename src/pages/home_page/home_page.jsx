import React from 'react';
import { useState } from 'react';
import styles from '../styles/home_page.model.css'

function HomePage(props) {
    const [value, setValue] = useState(0);
    function increment() {
        setValue(value + 1);
    }
    function decrement() {
        setValue(value - 1);
    }
    return (
        <div>
            <h1 value={value}>{value}</h1>
            <button className={styles.increment__button} onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
}

export default HomePage;