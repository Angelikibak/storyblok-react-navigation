import NavigationItem from '../NavigationItem/NavigationItem' 
import styles from './Header.module.css'

function Header({ header }) {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={header.logo.filename}
        alt="Recipe House logo"
      />

      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {header.navigation.map((item) => (
            <NavigationItem key={item._uid} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header