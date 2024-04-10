import React from 'react'
import "@/components/styles/MenuBar.css"
import Button from '../Button'
import hamburgerButtonImage from "@/public/hamburgerbutton.png"
import SideBar from '../SideBar/SideBar'

let buttonState = 1

const handleClick = (buttonState: number) => {


    const image = document.getElementById("hamburgerButton")
    if (image){
        if (buttonState === 1){
            image.style.transform = "rotate(-90deg)"

            const sideBarElement= document.getElementById("sidebar")
            if (sideBarElement){
                sideBarElement.style.left = "0px"
            }
        }
        else {
            image.style.transform = "rotate(0deg)"

            const sideBarElement= document.getElementById("sidebar")
            if (sideBarElement){
                sideBarElement.style.left = "-210px"
            }
        }
    }

}


const MenuBar = () => {
  return (
    <div className='menubar-container'>
      <Button 
        className="menubar-button" 
        children=""  
        buttonImage={hamburgerButtonImage.src}
        buttonImageClass='menubar-button-image'
        onClick={() => { handleClick(buttonState); buttonState *= -1} }
        imageId="hamburgerButton"
       />
       <p className='menubar-description'>MENU</p>
    </div>
  )
}

export default MenuBar


