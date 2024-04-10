import React from 'react'

export interface sideBarCheckboxProps {

    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>,
    className?: string,
    id?: string,
    name?: string,
}

const SideBarCheckbox: React.FC<sideBarCheckboxProps> = ( { value, setValue, className, id, name } ) => {
  return (
    <div>
      <input 
            className={className}
            type="checkbox"
            id={id}
            onChange={(e) => {setValue(e.target.checked)}}
            checked={value}
        >
        
        </input>
    </div>
  )
}

export default SideBarCheckbox
