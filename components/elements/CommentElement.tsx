import React from 'react'
import { comments } from '../Interfaces'
import "@/components/styles/CommentElement.css"

interface commentProps {

    data: comments | null,

}

const CommentElement: React.FC<commentProps> = ( { data } ) => {
  return (
    <div className="commentelement">
        { data && (
            <>
                <p className="comment-name"> {data.name} </p>
                <p className="comment-body"> {data.body} </p>
                <p className="comment-email"> {data.email} </p>
            </>
        )}
    </div>
  )
}

export default CommentElement
