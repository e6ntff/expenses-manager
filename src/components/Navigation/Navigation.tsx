import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Navigation.module.scss';

import { LanguageContext } from '../LanguageContext/LanguageContext';

import paths from '../../settings/paths';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActivePath = (path: string) => path === location.pathname;

  const { language, languages } = useContext(LanguageContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to={paths.home}
            className={isActivePath(paths.home) ? styles.active : ''}
          >
            <button className={styles.button}>
              {languages.home[language]}
            </button>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={paths.dashboard}
            className={isActivePath(paths.dashboard) ? styles.active : ''}
          >
            <button className={styles.button}>
              {languages.dashboard[language]}
            </button>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={paths.expenses}
            className={isActivePath(paths.expenses) ? styles.active : ''}
          >
            <button className={styles.button}>
              {languages.expenses[language]}
            </button>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={paths.categories}
            className={isActivePath(paths.categories) ? styles.active : ''}
          >
            <button className={styles.button}>
              {languages.categories[language]}
            </button>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={paths.settings}
            className={isActivePath(paths.settings) ? styles.active : ''}
          >
            <button className={styles.button}>
              {languages.settings[language]}
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={paths.about}
            className={isActivePath(paths.about) ? styles.active : ''}
          >
            <button className={styles.button}>
              {languages.about[language]}
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
