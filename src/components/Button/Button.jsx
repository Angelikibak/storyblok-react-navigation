import styles from './Button.module.css'

function Button({ label, href, openInNewWindow = false }) {
  return (
    <a
      className={styles.button}
      href={href}
      target={openInNewWindow ? '_blank' : undefined}
      rel={openInNewWindow ? 'noopener noreferrer' : undefined}
    >
      {label}
    </a>
  )
}

export default Button