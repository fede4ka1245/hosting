import React from 'react';
import styles from './Card.module.css';

const Card = ({ metrics, header }) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.header}>{ header }</h2>
      <ul className={styles.list}>
        {metrics.map((metric) => (
          <li key={metric.header}>
            <h3 className={styles.itemHeader}>
              {metric.header}
            </h3>
            <p className={styles.itemText}>
              {metric.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Card;
