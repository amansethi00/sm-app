import React,{useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import {updateHeader} from './headerSlice';
import {useSelector,useDispatch} from 'react-redux';
export const Header=({heading})=> {
    const header = useSelector(state=>state.header);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateHeader({title:"Tweeter"}))
    },[])
    return (
        <h1>
            {header.title}
        </h1>
    )
}
