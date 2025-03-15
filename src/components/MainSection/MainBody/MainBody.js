import React from 'react'
import styles from './MainBody.module.css'
import Card from './Cards/Card'

function MainBody() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.cards}>
        <Card name="Virat Kohli" userId="@imVkohli" image="./images/viratkohli1.jpeg" post="./images/vkohli.jpg"/>
        <Card name="Rushikesh" userId="Chinnur33969072" image="./images/viratkohli.jpeg" post="./images/viratkohli.jpeg"/>
        <Card name="Rohit Sharma" userId="@rohit264" image="./images/rohitsharma.jpg" post="./images/rsharma.jpg"/>
        <Card name="KL Rahul" userId="@KlRahul" image="./images/klrahul.avif" post="./images/klrahul1.webp"/>
      </div>
    </div>
  )
}

export default MainBody
