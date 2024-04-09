import React from 'react'
import "@/components/elements/styles/UserElement.css"
import { users } from '../Interfaces'

interface userElementProps {

    data: users | null,

}

const UserElement: React.FC<userElementProps> = ( { data } ) => {
  return (
    <div className='userelement'>
        { data && (
            <>
                <p className='user-name'>{data.name} <strong style={{color: 'gray'}}>aka</strong> '{data.username}'</p>
                <p className='user-username'></p>

            </>
        )}
    </div>
  )
}

export default UserElement
