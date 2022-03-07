import React, { ReactElement } from 'react'
import styles from './styles/Main.module.css'

function Main():ReactElement<string>{
  return (
    <div>
        <h1 className={styles.header_1}>Pietro Annobil</h1>
        <h3 className={styles.header_3}> Software developer based in London</h3>
    </div>
  )
}

export default Main