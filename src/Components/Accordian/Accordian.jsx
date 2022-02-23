import React, { useState } from 'react';
import styles from './Accordian.module.css';

const Accordian = ({ title, Body, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div onClick={() => setOpen((prev) => !prev)} className={styles.icon}>
          {open ? (
            <i className='fas fa-chevron-up' />
          ) : (
            <i className='fas fa-chevron-down' />
          )}
        </div>
      </header>

      {open ? <div className={styles.body}>{children}</div> : null}
    </div>
  );
};

export default Accordian;
