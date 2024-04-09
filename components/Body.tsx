import React from 'react'
import BodyElement from './BodyElement'
import "@/components/styles/Body.css"
import { users, comments, posts, instanceOfUsers, instanceOfComments, instanceOfPosts } from "@/components/Interfaces"

interface bodyProps {

    data: (users | comments | posts)[];

}



export const Body: React.FC<bodyProps> = ( { data } ) => {
  return (
    <div className="Body">
        { data.map((item: users | comments | posts) =>
            (
                <BodyElement 
                    type={
                        instanceOfUsers(item) ? "users" : 
                        instanceOfComments(item) ? "comments" : 
                        instanceOfPosts(item) ? "posts" : ""} 
                    data={item}
                />
            )) 
        }
    </div>
  )
}
