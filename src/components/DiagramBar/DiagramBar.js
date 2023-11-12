import React, { useContext } from 'react'

import styles from './DiagramBar.module.scss'
import getSymbol from '../../utils/currency'
import { CurrencyContext } from '../CurrencyContext/CurrencyContext'

const DiagramBar = (props) => {
  const { currency } = useContext(CurrencyContext)

  const value = props.maxValue > 0 ? (props.value / props.maxValue) * 100 : 0

  return (
    <li className={styles.bar}>
      <span className={styles.price}>
        {props.value > 0 ? getSymbol(currency) + props.value : ''}
      </span>
      <div className={styles.column}>
        <div
          className={styles.value}
          style={{ '--value': value > 100 ? '100%' : `${value}%` }}
        ></div>
      </div>
      <span className={styles.month}>{props.month}</span>
    </li>
  )
}

export default DiagramBar
