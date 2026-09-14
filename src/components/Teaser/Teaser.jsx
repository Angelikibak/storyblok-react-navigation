import { storyblokEditable } from '@storyblok/react'
import styles from './Teaser.module.css'

function Teaser({ blok }) {
  return (
    <section
      className={styles.teaser}
      {...storyblokEditable(blok)}
    >
      <h1>{blok.headline}</h1>
    </section>
  )
}

export default Teaser