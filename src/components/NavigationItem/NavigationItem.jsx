import styles from './NavigationItem.module.css'

function NavigationItem({ item }) {
  const href = item.link?.url || item.link?.cached_url

  const hasLink = Boolean(href)

  return (
    <li className={styles.item}>
      {hasLink ? (
        <a
          className={styles.link}
          href={href}
          target={item.link?.target === '_blank' ? '_blank' : undefined}
          rel={item.link?.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {item.label}
        </a>
      ) : (
        <span className={styles.label}>{item.label}</span>
      )}

      {item.children?.length > 0 && (
        <ul className={styles.submenu}>
          {item.children.map((child) => (
            <NavigationItem key={child._uid} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavigationItem