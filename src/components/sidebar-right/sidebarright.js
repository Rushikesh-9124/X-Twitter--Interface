import React from 'react'
import styles from './sidebarright.module.css'
import { CiSearch } from "react-icons/ci";

function Sidebarright() {
  return (
    <div className= {styles.sidebarright}>
      <div className={styles.search_bar}>
        <input type="text" placeholder="Search"/>
      </div>

      <div className={styles.box}>
        <h1>Subscribe to Premium</h1>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button>Subscribe</button>
      </div>

      <div className={styles.trending}>
          <div className={styles.adds}>
              <h2>What's happening</h2>
              <div className={styles.add_container}>
                <img src="./images/add.jpeg" alt=""  width="80" height="80"/>
                <div className={styles.h3_container}>
                  <h3>Khloé in Wonder Land</h3>
                  <p>LIVE</p>
                </div>
              </div>
          </div>
          <div className={styles.cards}>
              <div className={styles.card}>
                  <p>Royal Challengers Bangalore · Trending</p>
                  <h2>#Virat Kohli</h2>
              </div>
              <div className={styles.card}>
                  <p>Entertainment · Trending</p>
                  <h2>#Prabhas</h2>
              </div>
              <div className={styles.card}>
                  <p>Sports · Trending</p>
                  <h2>#RoyalChallengersBengaluru</h2>
              </div>

              <div className={styles.card}>
                  <p>Sports · Trending</p>
                  <h2>#RoyalChallengersBengaluru</h2>
              </div>
              <div className={styles.card}>
                  <p>Sports · Trending</p>
                  <h2>#RoyalChallengersBengaluru</h2>
              </div>
              <div className={styles.card}>
                  <p>Sports · Trending</p>
                  <h2>#RoyalChallengersBengaluru</h2>
              </div>
              <div className={styles.card}>
                  <p>Sports · Trending</p>
                  <h2>#RoyalChallengersBengaluru</h2>
              </div>
              <div className={styles.card}>
                  <p>Sports · Trending</p>
                  <h2>#RoyalChallengersBengaluru</h2>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Sidebarright
