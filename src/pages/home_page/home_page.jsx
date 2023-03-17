//ипортится библиотека реакта
import React from 'react';
//импортится хук из либы реакта
import { useState } from 'react';
//импортится файл стилей .css из папки styles как css-модуль
import styles from '../styles/home_page.module.css'

//компонент, реализованный в виде функции
function HomePage(props) {
    /* хук useRef возвращает в первый аргумент значение
    состояния элемента
    второй аргумент используется для установления нужного значения
    в отслеживаемом элементе*/
    const [value, setValue] = useState(0);

    /*функция использует второй аргумент хука useRef setValue
    и устанавливает значение в отслеживаемом элементе на (value+1)*/
    function increment() {
        setValue(value + 1);
    }
    //то же самое 
    function decrement() {
        setValue(value - 1);
    }

    //компонент возвращает html кусок вида:
    return (
        <div className={styles.counter__container}>
            <p className={styles.counter__display} value={value}>{value}</p>
            <button className={styles.counter__button} onClick={increment}>+1</button>
            <button className={styles.counter__button} onClick={decrement}>-1</button>
        </div>
    );
}

export default HomePage;