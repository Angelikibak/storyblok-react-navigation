import styles from './SocialLink.module.css'
import { storyblokEditable } from '@storyblok/react'

function SocialLink({ item }) {
  const href = item.link?.url || item.link?.cached_url

  if (!href) {
    return null
  }

  return (
    <a
      className={styles.link}
      href={href}
      aria-label={item.platform}
      {...storyblokEditable(item)}
    >
      <img
        className={styles.icon}
        src={item.icon.filename}
        alt=""
      />
    </a>
  )
}

export default SocialLink