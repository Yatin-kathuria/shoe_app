import React from 'react';
import styles from './Card.module.css';

const Card = ({ brand, description, img, price, size }) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.description}>{description}</div>
        <div className={styles.brand}>{brand}</div>
      </div>
      <img src={img[0]} alt={brand} className={styles.shoes_img} />
      <footer className={styles.footer}>
        <div>
          <div className={styles.price}>Price</div>
          <div className={styles.amount}>
            {price.prefix}
            {price.amount}
          </div>
        </div>
        <div className={styles.size}>
          {size.map((s) => (
            <div className={styles.mini_card}>{s}</div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Card;
