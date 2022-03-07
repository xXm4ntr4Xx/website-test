import React, { ReactElement } from 'react'
import styles from './styles/Header.module.css'
import Link from 'next/link';

function Header(): ReactElement<string>{
  return (
    <div className={styles.nav_div}>
      <nav className="navbar">
        <ul className={styles.nav_item}>
        <Link href={'#home'} ><a>Home</a></Link>
        <Link href={'#skills'} ><a>Skills</a></Link>
        <Link href={'#about'}><a >About</a></Link>
        <Link href={'#contact'}><a >Contact</a></Link>
        </ul>
     </nav>
    </div>
  )
}

export default Header