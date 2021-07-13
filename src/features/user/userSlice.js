import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  username: "golumolu",
  name: "Golu lal",
  bio: "Hi This is golu.Don't forget to follow me",
  followers: 240,
  following: 22,
  imageUrl: "asd",
  posts: [],
};
export const getUserByUsername = createAsyncThunk(
  "user/getUser",
  async (username) => {
    const response = await axios.get(
      `https://SocialMedia.amansethi00.repl.co/${username}`
    );
    console.log({ response });
    return response.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...action.payload.user,
      };
    },
  },
  extraReducers: {
    [getUserByUsername.fulfilled]: (state, action) => {
      console.log(action.payload);
      return {
        ...action.payload.user,
      };
    },
  },
});
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
