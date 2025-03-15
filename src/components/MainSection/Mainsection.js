import React from 'react'
import styles from './Mainsection.module.css'
import Navbar from './NavBar/Navbar'
import Post from './Post/Post'
import MainBody from './MainBody/MainBody'

function Mainsection() {
  return (
    <div className={styles.Mainsection}>
      <div className={styles.Mainsection_container}>
        <Navbar/>
        <Post/>
        <MainBody/>
      </div>
    </div>
  )
}

export default Mainsection
