import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
import AuthSlice from "../lib/features/authentication/AuthSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: AuthSlice,
  },
});

export default store;
