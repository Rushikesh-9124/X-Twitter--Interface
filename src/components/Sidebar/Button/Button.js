import React from 'react'
import styles from './Button.module.css'

function Button(props) {
  return (
    <button className={props.isPostbutton ? styles.postButton : styles.defaultButton} >{props.icon}{props.title}
    </button>
  )
}

export default Button
