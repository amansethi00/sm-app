import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: nanoid(),
      timestamp: new Date().toISOString(),
      content: "some content #hello",
      user: nanoid(),
      author:"TImes Now",
      username:"TimesNoe",
      reactions: {"❤": 5, "😭": 2},
      hashes: ["hello"],
    },
  ],
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
export default postsSlice.reducer;
