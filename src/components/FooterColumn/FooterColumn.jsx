import FooterLink from '../FooterLink/FooterLink'
import styles from './FooterColumn.module.css'
import { storyblokEditable } from '@storyblok/react'

function FooterColumn({ column }) {
  return (
    <div className={styles.column}
         {...storyblokEditable(column)}>
      <h3>{column.title}</h3>

      <ul className={styles.links}>
        {column.links.map((item) => (
          <li key={item._uid}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn