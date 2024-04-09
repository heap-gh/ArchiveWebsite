import React from 'react'
import Searchbar from './Searchbar'
import DropDown from './MenuBar'
import ProfileBar from './ProfileBar'

import "@/components/styles/Header.css"
import MenuBar from './MenuBar'

interface headerProps {

    setSearchString: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: 
        (keyBoardEvent?: React.KeyboardEvent<HTMLInputElement>) => void,
}


const Header: React.FC<headerProps> = ( { setSearchString, handleSubmit } ) => {
  return (
    <div className="Header">
        <MenuBar/>
        <Searchbar 
            setSearchString={setSearchString}
            handleSubmit={handleSubmit} 
            
        />
        <ProfileBar/>
    </div>
  )
}

export default Header
