import Link from 'next/link'

import styles from './Navbar.module.css'

import LinkedinImage from '../components/Icons/LinkedinIcon'
import InstagramImage from '../components/Icons/InstagramIcon'
import TwitterImage from '../components/Icons/TwitterIcon'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href='/'>
        <a className={styles.logo}>MeuFreela</a>
      </Link>
      <nav className={styles.socialIcons}>
        <a href='https://linkedin.com'>
          <LinkedinImage fill='white' />
        </a>
        <a href='https://instagram.com'>
          <InstagramImage fill='white' />
        </a>
        <a href='https://twitter.com'>
          <TwitterImage fill='white' />
        </a>
      </nav>
    </header>
  )
}
