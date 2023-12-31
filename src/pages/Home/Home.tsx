import React, { useEffect, useMemo, useState, useContext } from 'react';

import { LanguageContext } from '../../components/LanguageContext/LanguageContext';

import styles from './Home.module.scss';

import YearDiagram from '../../components/YearDiagram/YearDiagram';
import { CurrencyContext } from '../../components/CurrencyContext/CurrencyContext';

import getSymbol from '../../utils/currency';
import { useSelector } from 'react-redux';
import { getList } from '../../utils/store';
import { ExpenseItem } from '../../settings/interfaces';

const Home: React.FC = () => {
  const { currency } = useContext(CurrencyContext);

  const [total, setTotal] = useState<number>(0);

  const list = useSelector(getList);

  const totalPrice = useMemo(
    () =>
      list.reduce(
        (acc: number, item: ExpenseItem) => acc + item.price[currency],
        0
      ),
    [list, currency]
  );

  useEffect(() => {
    setTotal(totalPrice);
  }, [totalPrice, setTotal]);

  const { language, languages } = useContext(LanguageContext);

  return (
    <div className="app">
      <div className={styles.home}>
        <YearDiagram list={list} />
        <div className={styles.data}>
          <div className={styles.container}>
            <h2 className={styles.title}>{languages.total[language]}</h2>
            <span className={styles.title}>{getSymbol(currency) + total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
