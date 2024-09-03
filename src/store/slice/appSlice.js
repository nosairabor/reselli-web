import { createSlice } from "@reduxjs/toolkit";
import { LoaderKey } from "@/components/utils/loaderKey";

const initialState = {
  [LoaderKey.LOGIN_KEY]: { loading: false }
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    startLoad(state, action) {
      const newState = { ...state };
      newState[action.payload] = { loading: true, error: "" };
      return { ...newState };
    },
    stopLoad(state, action) {
      const newState = { ...state };
      newState[action.payload] = { loading: false, error: "" };
      return { ...newState };
    },
    setError(state, action) {
      return {
        ...state,
        [action.payload.key]: { loading: false, error: action.payload.error },
      };
    },
    clearError(state, action) {
      return {
        ...state,
        [action.payload]: state[action.payload]
          ? { ...state[action.payload], error: "" }
          : undefined,
      };
    },
  },
});

const { reducer, actions } = appSlice;

export const { startLoad, stopLoad, setError, clearError } = actions;
export default reducer;
