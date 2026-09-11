import styles from './FooterLink.module.css'

function FooterLink({ item }) {
  const href = item.link?.url || item.link?.cached_url

  if (!href) {
    return <span>{item.label}</span>
  }

  return (
    <a className={styles.link} href={href}>
      {item.label}
    </a>
  )
}

export default FooterLink