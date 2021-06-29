import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  title: "Home",
};
export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    updateHeader(state, action) {
      const {title} = action.payload;
      state.title = title;
    },
  },
});
export const {updateHeader} = headerSlice.actions;
export default headerSlice.reducer;
