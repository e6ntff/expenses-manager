import React, { useContext, useMemo } from 'react'

import styles from './Diagram.module.scss'

import DiagramBar from '../DiagramBar/DiagramBar'
import { CurrencyContext } from '../CurrencyContext/CurrencyContext'
import { calculatePrices, currencyRates } from '../../api/getExchangeRates'

const Diagram = (props) => {
  const { currency } = useContext(CurrencyContext)

  const data = useMemo(() => {
    const newData = [
      { month: 'Jan', value: 0 },
      { month: 'Feb', value: 0 },
      { month: 'Mar', value: 0 },
      { month: 'Apr', value: 0 },
      { month: 'May', value: 0 },
      { month: 'Jun', value: 0 },
      { month: 'Jul', value: 0 },
      { month: 'Aug', value: 0 },
      { month: 'Sep', value: 0 },
      { month: 'Oct', value: 0 },
      { month: 'Nov', value: 0 },
      { month: 'Dec', value: 0 },
    ]

    for (const item of props.filteredList) {
      item.price = calculatePrices(item.price, currencyRates)
      const currentMonth = new Date(item.date).getMonth()
      newData[currentMonth].value += item.price[currency]
    }

    newData.maxValue = Math.max(...newData.map((item) => item.value))
    return newData
  }, [props.filteredList, currency])

  return (
    <ul className={styles.diagram}>
      {data.map((item) => (
        <DiagramBar
          key={item.month}
          month={item.month}
          value={item.value}
          maxValue={data.maxValue}
        />
      ))}
    </ul>
  )
}

export default Diagram
