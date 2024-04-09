"use client";

// This is a test

import Header from "../components/Header/Header"
import React, { useEffect } from "react"
import { useState } from "react"
import "./styles/page.css"
import { posts, comments, users, requestProps, requestData } from "@/components/Interfaces";
import apiRequest from "@/components/ApiRequst";
import { Body } from "@/components/Body";
import { similarity } from "@/helper/helper";
import SideBar from "@/components/SideBar/SideBar";

export default function Home() {

    const API_URL = "https://jsonplaceholder.typicode.com/"
    
    // The string entered in the search bar
    const [searchString, setSearchString] = useState("");

    // The last status of the fetch request to the API
    const [fetchStatus, setFetchStatus] = useState("");

    // The data which was collected based on similarity to searchString
    const [searchData, setSearchData] = useState<(users | comments | posts)[]>([]);

    // the data from the API
    const [usersData, setUsersData] = useState<users[]>([]);
    const [postsData, setPostsData] = useState<posts[]>([]);
    const [commentsData, setCommentsData] = useState<comments[]>([]);

    /*
        This functions handle a submit request, which is emitted when "ENTER" is pressed when the Searchbar is focussed
        or the Button next to the Searchbar is pressed

        The fucntion iterates through all user/posts/comments/... - data and checks for similarities in searchString
        and the data it iterates through. When a certain threshhold of similarity is reached, the data is added
        to "searchData", which is then used to display the content which is similar to the string entered in the
        SearchBar

    */

    const handleSubmit = (keyBoardEvent?: React.KeyboardEvent<HTMLInputElement>) => {

            if (searchString !== "" && searchString !== " "){
                
                if (keyBoardEvent?.key == "Enter" || keyBoardEvent === undefined){
                    
                    let matchingData: (users | comments | posts)[] = [];
                    

                    for (const key in usersData){
                        if(similarity(usersData[key].name, searchString) > 0.4){
                            matchingData.push(usersData[key])
                        }
                    }

                    for (const key in commentsData) {
                        if(commentsData[key].body.includes(searchString)
                            || commentsData[key].name.includes(searchString)){
                            matchingData.push(commentsData[key])
                        }
                        
                    }


                    for (const key in postsData) {
                        if(postsData[key].body.includes(searchString)
                            || similarity(postsData[key].title, searchString) > 0.3){
                                matchingData.push(postsData[key])
                        }
                    }

                    // TODO: ITERATE THROUGH OTHER DATA

                    // Add the data to searchData
                    setSearchData(matchingData);

                }
            
            } else {
                setSearchData([])
            }

    }

    /*
        This function gets called every time the website (re)-loads and performs update operation
    */

    useEffect(() => {

        /*
            This function loads the JSON data from the fake rest API declared in API_URL
            and stores the data in localStorage under the keys:

            "users_data"        for API_URL + "users"
            "comments_data"     for API_URL + "comments"
            "posts_data"        for API_URL + "posts"

            and in arrays

            usersData           for API_URL + "users"
            commentsData        for API_URL + "comments"
            postsData           for API_URL + "posts"

        */

        async function loadServerData() {

            // Fetch USERS

            const users_req_props: requestProps = {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                }
            }
         
            let users_data: requestData = { };
            const users_response = await apiRequest(API_URL + "users", users_req_props, users_data);
 
            if (users_response == "success"){
                localStorage.setItem("users_data", JSON.stringify(users_data.dataOut));
                setUsersData(users_data.dataOut);
            }
            else {
                setFetchStatus(users_response);
                return;
            }
            

            // Fetch Comments

            const comments_req_props: requestProps = {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                }
            }
         
            let comments_data: requestData = { };
            const comments_response = await apiRequest(API_URL + "comments", comments_req_props, comments_data);
            
            if (comments_response == "success"){
                localStorage.setItem("comments_data", JSON.stringify(comments_data.dataOut));
                setCommentsData(comments_data.dataOut);
            }
            else {
                setFetchStatus(comments_response);
                return;
            }


            // Fetch Posts

            const posts_req_props: requestProps = {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                }
            }
         
            let posts_data: requestData = { };
            const posts_response = await apiRequest(API_URL + "posts", posts_req_props, posts_data);
            
            if (posts_response == "success"){
                localStorage.setItem("posts_data", JSON.stringify(posts_data.dataOut));
                setPostsData(posts_data.dataOut);
            }
            else {
                setFetchStatus(posts_response);
                return;
            }

            // SAVE MORE



        }
        
        loadServerData();

    }, [])

  return (
    <main>
        <Header 
            setSearchString={setSearchString} 
            handleSubmit={handleSubmit}
        />
        <SideBar></SideBar>
        <Body data={searchData}>

        </Body>

    </main>
  );
}
