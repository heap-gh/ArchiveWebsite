import React, { useState } from 'react'
import "./SideBar.css"
import { sideBarCheckboxProps } from "@/components/SideBar/SideBarCheckbox"
import SideBarCheckbox from '@/components/SideBar/SideBarCheckbox'


interface sideBarProps {

    userCheckboxProps: sideBarCheckboxProps,
    postsCheckboxProps: sideBarCheckboxProps,
    commentsCheckboxProps: sideBarCheckboxProps,
}



const SideBar: React.FC<sideBarProps> = ( { 
    userCheckboxProps,
    postsCheckboxProps,
    commentsCheckboxProps,

} ) => {


  return (
    <div id={"sidebar"} className="sidebar">
        
        <SideBarCheckbox 
        className="sidebar-checkbox"
        id="searchUsersCheckbox"
        setValue={userCheckboxProps.setValue}
        value={userCheckboxProps.value}
        name="Users"
        />

        <SideBarCheckbox 
        className="sidebar-checkbox"
        id="searchPostsCheckbox"
        setValue={postsCheckboxProps.setValue}
        value={postsCheckboxProps.value}
        name="Posts"
        />

        <SideBarCheckbox 
        className="sidebar-checkbox"
        id="searchCommentsCheckbox"
        setValue={commentsCheckboxProps.setValue}
        value={commentsCheckboxProps.value}
        name="Comments"
        />

    </div>
  )
}

export default SideBar
