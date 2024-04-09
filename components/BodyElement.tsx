
import React from 'react'
import "@/components/styles/BodyElement.css"
import UserElement from './elements/UserElement'
import PostElement from './elements/PostElement'
import CommentElement from './elements/CommentElement'

interface bodyElementProps {

    type: string,
    data: any,

}

const BodyElement: React.FC<bodyElementProps> = ( { type, data } ) => {
  return (
    <div className="bodyelement">
        <p className="cell-type"> { 
           type === "users" ? "USER" 
         : type === "posts" ? "POST" 
         : type === "comments" ? "COMMENT" 
         : ""
        } 
        </p>
        <hr className="bodyelement-divider"></hr>
        
        { 
         type === "users" ?
         <UserElement data={ data } /> : type === "posts" ?
         <PostElement data= { data }/> : type === "comments" ?
         <CommentElement data= { data }/> : <div/>
        } 

    </div>
  )
}

export default BodyElement
