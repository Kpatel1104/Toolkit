import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state, action){
            // console.log("Hii" + action.payload)
            // let userIndexNum = state.indexOf(action.payload)
            state.splice(action.payload, 1);
            
        },
        clearAllUser(state, action){
           return [];
        },
    },
});

console.log(userSlice.actions.addUser());

export default userSlice.reducer;
export const {addUser, removeUser, clearAllUser} = userSlice.actions;

