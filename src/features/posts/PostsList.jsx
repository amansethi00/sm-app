
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from "react-redux";
import {themes} from "../themes/getTheme";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
export const PostsList=()=> {
    const classes = useStyles();
    const posts = useSelector(state=>state.posts.posts);
    const theme = useSelector(state=>state.theme.theme);
    const postsRender=posts.map(post=>{
        return(
            <Card className={classes.root}>
                <Link to={`/posts/${post.id}`}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={post.author}
        subheader={`@${post.username}`}
      />
      </Link>
            <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
      </CardContent>
      </Card>
        )

    })
    return (
        <section style={{backgroundColor:themes[theme].secondary}}>
            {postsRender}
        </section>
    )
}

