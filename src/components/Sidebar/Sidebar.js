import React from 'react'
import styles from './Sidebar.module.css'
import Button from './Button/Button'

import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { CiCircleMore } from "react-icons/ci";
import { GiArtificialHive } from "react-icons/gi";




function Sidebar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.main_btn}>
        <Button icon={<FaXTwitter  fontSize="30px"/>}/>
        <Button icon={<MdOutlineHome fontSize="30px" />} title="Home"/>
        <Button icon={<IoSearchSharp fontSize="30px"/>} title="Explore"/>
        <Button icon={<IoNotificationsOutline fontSize="30px"/>} title="Notifications"/>
        <Button icon={<MdOutlineMailOutline fontSize="30px"/>} title="Messages"/>
        <Button icon={<GiArtificialHive fontSize="30px"/>} title="Grok"/>
        <Button icon={<CiBookmark fontSize="30px"/>} title="Bookmarks"/>
        <Button icon={<IoPeople fontSize="30px"/>} title="Communities"/>
        <Button icon={<MdOutlineVerified fontSize="30px"/>} title="Premium"/>
        <Button icon={<AiOutlineThunderbolt fontSize="30px"/>} title="Verified Orgs"/>
        <Button icon={<GrUserManager fontSize="30px"/>} title="Profile"/>
        <Button icon={<CiCircleMore fontSize="30px"/>} title="More"/>
        <Button title="Post" isPostbutton = {true} />
      </div>
      <div className={styles.profile}>
          <div className={styles.profile_image}>
            <img src="./images/viratkohli.jpeg" alt="profile-image" width="45" height="45"/>
          </div>
          <div className={styles.profile_details}>
              <h1>Rushikesh &nbsp; <FaXTwitter  fontSize="20px"/></h1>
              <p>@Chinnur33969072</p>
          </div>
          <div className={styles.profile_more}>
          <CiCircleMore fontSize="25px"/>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
