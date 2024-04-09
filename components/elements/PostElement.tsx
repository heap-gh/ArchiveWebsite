import React from 'react'
import { posts } from '../Interfaces'

interface postProps {

    data: posts | null,

}

const PostElement: React.FC<postProps> = ( { data } ) => {
  return (
    <div className='postelement'>
        <>
            
        </>
    </div>
  )
}

export default PostElement
