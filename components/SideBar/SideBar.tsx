import React from 'react'
import "./SideBar.css"

const isRadioSelected = (radioValue: string): boolean => {

    return false;
}

const handleRadioClick = () => {


}


interface sideBarProps {


}

const SideBar: React.FC<sideBarProps> = ( { } ) => {
  return (
    <div id={"sidebar"} className="sidebar">
        <input 
            type="radio"
            name="comments-radio"
            value="com_rad"
            checked={isRadioSelected("com_rad")}
            onChange={handleRadioClick}
        />
    </div>
  )
}

export default SideBar
