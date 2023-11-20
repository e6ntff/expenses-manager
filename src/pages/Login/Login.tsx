import React, { useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../../utils/firebase';

import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import paths from '../../settings/paths';

const auth = getAuth(firebaseApp);

const Login: React.FC = () => {
  const navigate = useNavigate();

  const { language, languages } = useContext(LanguageContext);

  const [valid, setValid] = useState<boolean>(true);

  const [currentUser, setCurrentUser] = useState({
    email: '',
    password: '',
  });

  const handleFormChange = (event: any) => {
    setValid(true)
    const { name, value } = event.target;

    setCurrentUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        currentUser.email,
        currentUser.password
      );
      navigate('/');
    } catch (error: any) {
      setValid(false);
      alert(`Error in signing in: ${error.message}`);
    }
  };

  return (
    <div className="form">
      <form action="" className={styles.form} onSubmit={handleFormSubmit}>
        <label htmlFor="email" className={styles.label}>
          {languages.email[language]}
          <input
            type="text"
            name="email"
            className={styles.input}
            value={currentUser.email}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="password" className={styles.label}>
          {languages.password[language]}
          <input
            type="password"
            name="password"
            minLength={6}
            maxLength={16}
            className={styles.input}
            value={currentUser.password}
            onChange={handleFormChange}
          />
        </label>
        {!valid && (
          <p className={styles.invalid}>{languages.invalidLogin[language]}</p>
        )}
        <button type="submit" className={styles.button}>
          {languages.logIn[language]}
        </button>
        <button className={styles.link} onClick={() => {navigate(paths.register)}}>{languages.yet[language]}</button>
      </form>
    </div>
  );
};

export default Login;
