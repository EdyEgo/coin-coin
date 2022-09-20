import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  user: { userId: string; photoUrl: string | null } | null;
} = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeUserObject(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { changeUserObject } = authSlice.actions;

export default authSlice.reducer;
