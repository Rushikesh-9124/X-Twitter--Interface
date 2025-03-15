import React from 'react'
import styles from './Post.module.css'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.post_image}>
        <img src="./images/viratkohli.jpeg" alt=""  width="40" height="40"/>
        <input type="text" placeholder="What's happening? "/>
      </div>
      <div className={styles.post_tools}>
            <div className={styles.post_tools_icons}>
                <li><CiImageOn color='dodgerblue' fontSize="18px"/></li>
                <li> <MdOutlineGifBox color='dodgerblue' fontSize="18px"/></li>
                <li> <GiArtificialHive color='dodgerblue' fontSize="18px"/></li>
                <li><BiPoll color='dodgerblue' fontSize="18px"/></li>
                <li><BsEmojiSmile color='dodgerblue' fontSize="18px"/></li>
                <li><RiCalendarScheduleLine color='dodgerblue' fontSize="18px"/></li>
                <li><FaLocationDot color='dodgerblue' fontSize="18px"/></li>
            </div>
            <div className={styles.post_tools_submit}>
                <button type="submit">Post</button>
            </div>
      </div>
    </div>
  )
}

export default Post
