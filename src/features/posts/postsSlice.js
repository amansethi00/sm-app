import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [],
  status: "idle",
  error: "",
};
export const fetchPosts = createAsyncThunk("/posts/fetchAllPosts", async () => {
  const response = await axios.get(
    "https://SocialMedia.amansethi00.repl.co/posts"
  );
  return response.data.posts;
});
export const createNewPost = createAsyncThunk(
  "/posts/addNewPost",
  async ({ content, author, username }) => {
    console.log("djsfkin post slice ");
    console.log({ content, author, username });
    const response = await axios.post(
      "https://SocialMedia.amansethi00.repl.co/posts",
      {
        content,
        author,
        username,
      }
    );
    console.log(response);
    if (response.data.success) {
      return response.data.post;
    }
    return response;
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
      // post.reactions = { heart: 1, cry: 0, comments: 0 };
      // post.comments = [];
      // post.id = nanoid();
      // post.timestamp = new Date().toISOString();

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
      state.posts.unshift({ ...post });
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const { incrementReaction, addComment, addPost, setPosts } =
  postsSlice.actions;
export default postsSlice.reducer;
