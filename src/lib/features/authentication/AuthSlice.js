// "use client";
import { login } from "@/store/action/authAction";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let localStorageUserInfo;
// we have to parse the data from the key "userInfo" located in the localStorage. If we use stringify we will not get the actual data

if (typeof window !== "undefined") {
  localStorageUserInfo = JSON.parse(
    localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo")
  );
}

const initialState = {
  userInfo: [],
  currentUser: localStorageUserInfo ? localStorageUserInfo : null,
  alertType: "",
  loginisLoading: false,
  loginisSuccess: false,
  loginisError: false,

  registerisLoading: false,
  registerisSuccess: false,
  registerisError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleClearUserAlert: (state, action) => {
      state.deleteUserisLoading = false;
      state.deleteUserisSuccess = false;
    },
    // Use remove userinfo and token state to sign out
    ClearUserInfo: (state, action) => {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      // coming back to this return from undefined to null then test
      state.currentUser = null;
      state.loginisSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loginisLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loginisLoading = false;
      state.loginisSuccess = true;
      state.currentUser = action.payload.user;
      toast.success("Login ");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginisSuccess = false;
      state.loginisLoading = false;
      toast.error(action.payload);
    });
  },
});

export const { handleClearUserAlert, ClearUserInfo } = authSlice.actions;

export default authSlice.reducer;
