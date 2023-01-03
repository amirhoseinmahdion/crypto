import React from 'react';
import styles from "./coin.module.css"

const Coin = (props) => {
    const {symbol,name , image ,current_price,price_change_percentage_24h} =props.Coindata
    return (
        <div className={styles.main}>
            <img src={image} alt="imag"/>
            <h3>{name}</h3>
            <p>{symbol}</p>
            <p >{current_price.toFixed(2)} $</p>
            <p className={price_change_percentage_24h> 0 ? styles.greenprice: styles.redprice}>{price_change_percentage_24h} %</p>
        </div>
    );
};

export default Coin;