import React from 'react'

import { ReactComponent as On } from '../../assets/checkbox-on.svg'
import { ReactComponent as Off } from '../../assets/checkbox-off.svg'

import styles from './Checkbox.module.css'

const Checkbox = ({ label, toggleFilter, value, checked }) => {
  const checkboxView = checked ? <On /> : <Off />
  return (
    <div className={styles.wrapper} onClick={() => toggleFilter(!checked, value)}>
      <input className="visually-hidden" type="checkbox" />
      <div className={styles.marker}>{checkboxView}</div>
      <label className={styles.label}>{label}</label>
    </div>
  )
}

export default Checkbox
