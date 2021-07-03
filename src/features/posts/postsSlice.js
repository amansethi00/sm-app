import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: nanoid(),
      timestamp: new Date().toISOString(),
      content:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? #hello",
      user: nanoid(),
      author: "TImes Now",
      username: "TimesNoe",
      reactions: { heart: 5, cry: 2, comments: 2 },
      comments: [
        {
          username: "ramlal",
          author: "ram kumar yadav",
          content: "Hey Thanks for this informative post buddy",
        },
        {
          username: "jalebibai",
          author: "jabeli raseele",
          content: "This is good,keep sharing more",
        },
      ],
      hashes: ["hello"],
    },
    {
      id: nanoid(),
      timestamp: new Date().toISOString(),
      content: "some content #hello",
      user: nanoid(),
      author: "TImes Now",
      username: "TimesNoe",
      reactions: { heart: 5, cry: 2, comments: 4 },
      comments: [],
      hashes: ["hello"],
    },
  ],
};
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
      post.reactions = { heart: 1, cry: 0, comments: 0 };
      post.comments = [];
      post.id = nanoid();
      post.timestamp = new Date().toISOString();

      state.posts.push({ ...post });
    },
  },
});
export const { incrementReaction, addComment, addPost } = postsSlice.actions;
export default postsSlice.reducer;
