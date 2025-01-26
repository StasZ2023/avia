import React from 'react'

import Logo from '../../Logo/Logo'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className="visually-hidden">Поиск самых дешевых авиабилетов на Aviasales</h1>
      <Logo />
    </header>
  )
}

export default Header
