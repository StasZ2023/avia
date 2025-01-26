import React from 'react'

import Header from '../Layouts/Header/Header'
import Main from '../Layouts/Main/Main'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
    </div>
  )
}

export default App
