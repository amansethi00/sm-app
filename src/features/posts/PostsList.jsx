
import React from 'react';
import Box from '@material-ui/core/Box';
import {useSelector} from "react-redux";
import {themes} from "../themes/getTheme";
export const PostsList=()=> {
    const posts = useSelector(state=>state.posts.posts);
    const theme = useSelector(state=>state.theme.theme);
    const postsRender=posts.map(post=>{
        return(
            <Box color={themes[theme].secondary}>
            Rhisis s posts
        </Box>
        )

    })
    return (
        <div>
            {postsRender}
        </div>
    )
}

