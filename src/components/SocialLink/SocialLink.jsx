import styles from './SocialLink.module.css'

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