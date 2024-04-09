import React from 'react'
import "@/components/styles/searchbar.css"
import Button from '../Button'

interface searchBarProps {

    setSearchString: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (keyBoardEvent?: React.KeyboardEvent<HTMLInputElement>) => void,

}


const Searchbar: React.FC<searchBarProps> = ( { setSearchString, handleSubmit } ) => {

    
  return (
    <div className='searchbar-container'>
        <input 
            className="searchbar" 
            onChange={(e) => {setSearchString(e.target.value)}}
            onKeyDown={(e) => {handleSubmit(e)}}
            placeholder='Search ...'
        >
        </input>

        <Button className='search-enter-button' 
                children=""
                onClick={handleSubmit}
        ></Button>
    </div>
  )
}

export default Searchbar
