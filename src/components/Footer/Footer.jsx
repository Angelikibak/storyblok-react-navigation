import FooterColumn from '../FooterColumn/FooterColumn'
import FooterLink from '../FooterLink/FooterLink'
import SocialLink from '../SocialLink/SocialLink'
import styles from './Footer.module.css'

function Footer({ footer }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.columns}>
          {footer.columns.map((column) => (
            <FooterColumn key={column._uid} column={column} />
          ))}
        </div>

        <div className={styles.socialLinks}>
          {footer.social_links?.map((item) => (
            <SocialLink key={item._uid} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {currentYear} {footer.copyright}
        </p>

        <ul className={styles.legalLinks}>
          {footer.legal_links?.map((item) => (
            <li key={item._uid}>
              <FooterLink item={item} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer