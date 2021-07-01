import { createSlice } from "@reduxjs/toolkit";
const initialState={
    username:"golumolu",
    name:"Golu lal",
    bio:"Hi This is golu.Don't forget to follow me",
    followers:240,
    following:22,
    imageUrl:"asd"
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{}
})
export default userSlice.reducer;