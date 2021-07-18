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
  followingList: [],
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
export const followUser = createAsyncThunk(
  "user/followuser",
  async (currentUsernameAndUserToBeFollowed) => {
    const { currentUsername, userToBeFollowed } =
      currentUsernameAndUserToBeFollowed;
    console.log({ userToBeFollowed });
    const response = await axios.post(
      `https://SocialMedia.amansethi00.repl.co/${currentUsername}/follow`,
      {
        userToBeFollowed,
      }
    );
    console.log({ response });
    return response.data;
  }
);
export const unfollowUser = createAsyncThunk(
  "user/unfollowuser",
  async (currentUsernameAndUserToBeUnfollowed) => {
    const { currentUsername, userToBeUnfollowed } =
      currentUsernameAndUserToBeUnfollowed;
    const response = await axios.post(
      `https://SocialMedia.amansethi00.repl.co/${currentUsername}/unfollow`,
      {
        userToBeUnfollowed,
      }
    );
    return response.data;
  }
);
export const updateBio = createAsyncThunk(
  "user/updateBio",
  async (usernameAndBio) => {
    const { username, bio } = usernameAndBio;
    const response = await axios.post(
      `https://SocialMedia.amansethi00.repl.co/editProfile`,
      {
        bio,
        username,
      }
    );
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
    logOutUser: (state, action) => {
      return {
        ...initialState,
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
    [followUser.fulfilled]: (state, action) => {
      return {
        ...action.payload.user,
      };
    },
    [unfollowUser.fulfilled]: (state, action) => {
      return {
        ...action.payload.user,
      };
    },
    [updateBio.fulfilled]: (state, action) => {
      return {
        ...action.payload.user,
      };
    },
  },
});
export const { updateUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
