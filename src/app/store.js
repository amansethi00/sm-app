import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themes/themeSlice";
import postsReducer from "../features/posts/postsSlice";
import headerReducer from "../features/header/headerSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    header: headerReducer,
    user: userReducer,
  },
});
