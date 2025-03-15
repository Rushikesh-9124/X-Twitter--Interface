import React from 'react'
import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card_profile_image}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.card_profile_container}>
        <div className={styles.card_profile_id}>
            <h3>{props.name}</h3> 
            <p>{props.userId}</p>
        </div>

        <div className={styles.card_profile_post}>
            <img src={props.post} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Card
