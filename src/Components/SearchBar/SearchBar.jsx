import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <i className='fas fa-search'></i>
      </div>
      <input type='text' className={styles.input} {...props} />
    </div>
  );
};

export default SearchBar;
