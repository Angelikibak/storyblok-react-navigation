import styles from './FooterLink.module.css'
import { storyblokEditable } from '@storyblok/react'

function FooterLink({ item }) {
  const href = item.link?.url || item.link?.cached_url

  if (!href) {
    return <span {...storyblokEditable(item)}>{item.label}</span>
  }

  return (
    <a className={styles.link}  
        href={href} 
        {...storyblokEditable(item)}>
      {item.label}
    </a>
  )
}

export default FooterLink