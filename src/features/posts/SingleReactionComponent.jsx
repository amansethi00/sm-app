import React from 'react'
import { IconButton,Typography } from '@material-ui/core'
export const SingleReactionComponent=({Icon,count,label})=> {
    return (
        <IconButton aria-label={label?label:"reaction"}>
            <Icon/>
            <Typography variant="h6">{count}</Typography>
        </IconButton>
    )
}

