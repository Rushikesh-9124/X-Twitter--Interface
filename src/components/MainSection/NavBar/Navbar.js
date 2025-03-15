import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <React.Fragment>
    <nav className={styles.navBar}>
      <ul>
        <li><a href="#">For you</a>
        <div className={styles.bar}></div>
        </li>
        <li><a href="#">Following</a></li>
        <li><a href="#">Hail Virat Kohli</a></li>
      </ul>
      
    </nav>
    
    </React.Fragment>
    
  )
}

export default Navbar
