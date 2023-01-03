import React from 'react';
import loadingimg from "../gif/Spinner-1s-200px.gif"
import styles from "./loading.module.css"

const Loading = () => {
    return (
        <div className={styles.load}>
            <img src={loadingimg} alt="load"/>
            <h1>loading ... ...</h1>
        </div>
    );
};

export default Loading;