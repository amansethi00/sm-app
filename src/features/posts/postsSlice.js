import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: nanoid(),
      timestamp: new Date().toISOString(),
      content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? #hello",
      user: nanoid(),
      author: "TImes Now",
      username: "TimesNoe",
      reactions: {"❤": 5, "😭": 2},
      hashes: ["hello"],
    },
    {
      id: nanoid(),
      timestamp: new Date().toISOString(),
      content: "some content #hello",
      user: nanoid(),
      author: "TImes Now",
      username: "TimesNoe",
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
