import React from 'react'
import { connect } from 'react-redux'

import { sortingAC } from '../../actions/sortActions'

import styles from './Tabs.module.css'

const Tabs = ({ sortValues, sortingAC }) => {
  return (
    <div className={styles.wrapper}>
      {sortValues.map((item, id) => {
        return (
          <div
            key={id}
            className={`${styles.tab} ${item.checked ? styles['tab-current'] : ''}`}
            onClick={item.checked ? () => {} : () => sortingAC('sort', item.value)}
          >
            <span>{item.text}</span>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({ sortValues: state.sortReducer })

export default connect(mapStateToProps, { sortingAC })(Tabs)
