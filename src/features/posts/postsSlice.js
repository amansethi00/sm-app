import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API = "https://SocialMedia.amansethi00.repl.co";

const initialState = {
  posts: [],
  status: "idle",
  error: "",
};
export const fetchPosts = createAsyncThunk("/posts/fetchAllPosts", async () => {
  const response = await axios.get(`${API}/posts`);
  return response.data.posts;
});
export const createNewPost = createAsyncThunk(
  "/posts/addNewPost",
  async (post) => {
    const { content, author, username } = post;
    console.log("djsfkin post slice ");
    console.log({ content, author, username });
    const response = await axios.post(`${API}/posts`, {
      content,
      author,
      username,
    });
    return response.data;
  }
);
export const createNewComment = createAsyncThunk(
  "/posts/newComment",
  async (postIdAndComment) => {
    const { postId, username, author, content } = postIdAndComment;
    const response = await axios.post(`${API}/posts/${postId}/comment/new`, {
      username,
      author,
      content,
    });
    console.log(response);
    return response.data;
  }
);
export const postAreaction = createAsyncThunk(
  "/posts/reaction",
  async (postIdAndReaction) => {
    console.log({ postIdAndReaction });
    const { postId, reaction } = postIdAndReaction;
    const response = await axios.post(`${API}/posts/${postId}/${reaction}`, {});
    console.log(response);
    return response.data;
  }
);
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementReaction: (state, action) => {
      console.log({ action });
      const post = state.posts.find((post) => post.id === action.payload.id);
      post.reactions[action.payload.reaction]++;
    },
    addComment: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload.id);
      post.comments.push(action.payload.comment);
    },
    addPost: (state, action) => {
      console.log(current(state));
      const post = action.payload.post;
      state.posts.push({ ...post });
    },
    setPosts: (state, action) => {
      console.log({ action });
      state.posts.push(...action.payload.posts);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    //createNewPost extrareducers
    [createNewPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [createNewPost.fulfilled]: (state, action) => {
      state.status = "success";
      const post = action.payload.post;
      console.log("new post added");
      state.posts.unshift({ ...post });
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      console.log("post rejected");
      state.error = action.error.message;
    },
    //add new comment
    [createNewComment.pending]: (state, action) => {
      state.status = "loading";
    },
    [createNewComment.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedPost = action.payload.post;
      const postToBeUpdated = state.posts.find(
        (post) => post.id === updatedPost.id
      );
      postToBeUpdated.comments = updatedPost.comments;
      postToBeUpdated.reactions = updatedPost.reactions;
    },
    [createNewComment.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    //post a reaction
    [postAreaction.pending]: (state, action) => {
      // state.status = "loading";
    },
    [postAreaction.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedPost = action.payload.post;
      const postToBeUpdated = state.posts.find(
        (post) => post.id === updatedPost.id
      );
      postToBeUpdated.reactions = updatedPost.reactions;
    },
    [postAreaction.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const { incrementReaction, addComment, addPost, setPosts } =
  postsSlice.actions;
export default postsSlice.reducer;
