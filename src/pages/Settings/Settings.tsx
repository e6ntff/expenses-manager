import React, { useContext } from 'react';

import styles from './Settings.module.scss';

import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import LanguageSelect from '../../components/LanguageSelect/LanguageSelect';
import CurrencySelect from '../../components/CurrencySelect/CurrencySelect';

const Settings: React.FC = () => {
  const { language, languages } = useContext(LanguageContext);

  return (
    <div className="app">
      <div className={styles.settings}>
        <div className={styles.container}>
          <h2 className={styles.name}>{languages.language[language]}</h2>
          <LanguageSelect />
        </div>
        <div className={styles.container}>
          <h2 className={styles.name}>{languages.currency[language]}</h2>
          <CurrencySelect />
        </div>
      </div>
    </div>
  );
};

export default Settings;
