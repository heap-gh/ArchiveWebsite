import React from 'react'
import "./styles/Button.css"

interface buttonInterface {

    children: React.ReactNode,
    className: string,
    buttonImage?: string,
    buttonImageClass?: string,
    buttonText?: string,
    buttonTextClass?: string,
    onClick?: (
        event?: React.KeyboardEvent<HTMLInputElement>) => void,
    imageId?: string,
}

const Button: React.FC<buttonInterface>= ( 
    { 
        children,
        className,
        buttonImage,
        buttonImageClass,
        buttonText,
        buttonTextClass,
        onClick,
        imageId
    } 
) => {
  return (
    <button 
        className={className}
        onClick={onClick? (e) => onClick() : () => console.log("not defined")}
    >
        <img id={imageId ? imageId : ""} className={buttonImageClass} src={buttonImage}></img>
    </button>
  )
}

export default Button
