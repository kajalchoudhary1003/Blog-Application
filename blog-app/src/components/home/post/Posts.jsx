import React, { useEffect } from 'react'
import { useState } from 'react';
import {API} from '../../../service/api'
import Post from './Post';

const Posts = () => {
const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
 let response = await API.getAllPosts();
 if(response.isSuccess){
     setPosts(response.data);
 }
    }
    fetchData();
}, [])

  return (
    <>
    {
        posts && posts.length > 0 ? posts.map(post => (
        <div className='flex flex-wrap justify-center mx-2 my-3'>
           <div className='lg:w-1/3 xl:w-1/4 md:w-1/2 w-full'>
           <Post post={post}/>
            </div>
            </div>
        ) ) :

        <div className='flex flex-row justify-center mt-10'> <p className='text-lg font-semibold text-red-600'>No data available to display</p></div>
    }
    </>
  )
}

export default Posts;