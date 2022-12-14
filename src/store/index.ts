import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // not showing non-serializable warnings
    }),
});
