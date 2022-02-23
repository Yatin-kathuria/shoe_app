import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ label, ...rest }) => {
  return (
    <label
      className={styles.container}
      style={{ fontWeight: rest.checked ? 'bold' : 'normal' }}
    >
      <span>{label}</span>
      <input type='checkbox' {...rest} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
