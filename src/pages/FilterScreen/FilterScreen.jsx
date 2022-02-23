import React, { useEffect, useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Card from '../../Components/Card/Card';
import styles from './FilterScreen.module.css';
import data from '../../data.js';
import Accordian from '../../Components/Accordian/Accordian';
import Checkbox from '../../Components/Checkbox/Checkbox';

const FilterScreen = () => {
  const [shoes, setShoes] = useState(data);
  const [categories, setCategories] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [checkedSizes, setCheckedSizes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const categ = new Set();
    const size = new Set();
    data.forEach((shoe) => {
      shoe.tags.forEach((tag) => categ.add(tag));
      shoe.size.forEach((s) => size.add(s));
    });

    setCategories([...categ]);
    setSizes([...size].sort((a, b) => a - b));
  }, []);

  useEffect(() => {
    // debugger;
    let tempShoes = JSON.parse(JSON.stringify(data));
    let setOfCategories = new Set(checkedCategories);
    let setOfSizes = new Set(checkedSizes);

    tempShoes = tempShoes.filter((shoe) =>
      shoe.brand.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (setOfCategories.size > 0) {
      tempShoes = tempShoes.filter((shoe) => {
        for (let tag of shoe.tags) {
          if (setOfCategories.has(tag)) {
            return true;
          }
        }

        return false;
      });
    }

    if (setOfSizes.size > 0) {
      tempShoes = tempShoes.filter((shoe) => {
        for (let s of shoe.size) {
          if (setOfSizes.has(s)) {
            console.log('hello' + s);
            return true;
          }
        }

        return false;
      });
    }

    setShoes(tempShoes);
  }, [searchValue, checkedCategories, checkedSizes]);

  const handleToggle = (e, type) => {
    const checked = e.target.checked;
    console.log(e.target.checked);
    const set = new Set(checkedCategories);
    if (checked) {
      set.add(type);
    } else {
      set.delete(type);
    }

    setCheckedCategories([...set]);
  };

  const handleToggleSize = (value) => {
    const index = checkedSizes.findIndex((s) => s === value);
    if (index === -1) {
      checkedSizes.push(value);
    } else {
      checkedSizes.splice(index, 1);
    }

    setCheckedSizes([...checkedSizes]);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>Shoe</div>
        <div>
          <SearchBar
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </header>
      <section className={styles.body}>
        <article className={styles.sidepanel}>
          <Accordian title='Categories'>
            <div>
              {categories.map((c) => (
                <Checkbox
                  key={c}
                  checked={checkedCategories.includes(c)}
                  label={c}
                  onChange={(e) => handleToggle(e, c)}
                />
              ))}
            </div>
          </Accordian>
          <div className={styles.size_title}>Sizes</div>
          <div className={styles.size_container}>
            {sizes.map((s) => (
              <div
                key={s}
                className={`${styles.mini_card} ${
                  checkedSizes.includes(s) ? styles.selected : ''
                }`}
                onClick={() => handleToggleSize(s)}
              >
                {s}
              </div>
            ))}
          </div>
        </article>
        <div className={styles.main}>
          <header className={styles.shoes_header}>
            <div className={styles.title}>Arrival</div>
          </header>
          <section className={styles.card_container}>
            {shoes.map((shoe) => (
              <Card key={shoe.id} {...shoe} />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default FilterScreen;
