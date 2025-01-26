import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '../UI/Checkbox/Checkbox'
import * as actions from '../actions/filterActions'

import styles from './Form.module.css'

const Form = ({ checkboxList, filterAC, filterAllAC }) => {
  const toggleFilter = (checked, value) => {
    const all = { ...checkboxList[0] }
    const points = checkboxList.slice(1)

    if (value === 'all') {
      filterAllAC(checked)
    } else {
      if (all.checked && !checked) {
        filterAC('all')
      } else if (points.filter((item) => item.checked).length === 3 && !all.checked && checked) {
        filterAC('all')
      }
      filterAC(value)
    }
  }
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend>Количество пересадок</legend>
        <div className={styles.wrapper}>
          {checkboxList.map(({ label, value, checked }, id) => {
            return <Checkbox key={id} value={value} label={label} checked={checked} toggleFilter={toggleFilter} />
          })}
        </div>
      </fieldset>
    </form>
  )
}

const mapStateToProps = (state) => ({ checkboxList: state.filterReducer })

export default connect(mapStateToProps, actions)(Form)
