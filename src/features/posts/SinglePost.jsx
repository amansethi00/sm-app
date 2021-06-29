import React from 'react'
import { useParams } from 'react-router-dom'

export const SinglePost=()=> {
    const postId = useParams();
    console.log({postId});
    return (
        <div style={{color:"white"}}>
            <h2>Hello Single Post Page</h2>
        </div>
    )
}

