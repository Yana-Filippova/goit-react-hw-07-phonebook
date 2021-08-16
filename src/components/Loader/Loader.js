import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function LoaderComponent() {
  return (
    <div className={styles.container}>
      <Loader
        className={styles.loader}
        type="Circles"
        color="#2275c9"
        height={60}
        width={60}
        timeout={3000}
      />
    </div>
  );
}
