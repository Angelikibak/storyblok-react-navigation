import NavigationItem from '../NavigationItem/NavigationItem' 
import styles from './Header.module.css'
import Button from '../Button/Button'
import { storyblokEditable } from '@storyblok/react'

function Header({ header }) {

  const cta = header.cta?.[0]
  const ctaHref = cta?.link?.url || cta?.link?.cached_url

  return (
    <header className={styles.header}
            {...storyblokEditable(header)}>
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

      {cta && ctaHref && (
        <div className={styles.cta}
            {...storyblokEditable(cta)}>
          <Button
            label={cta.label}
            href={ctaHref}
          />
        </div>
      )}
    </header>
  )
}

export default Header