import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import { setError, stopLoad } from "../slice/appSlice";

export const handleError = (
 err, key, dispatch
) => {
  // handle non-server based erorrs
  console.log(err);
  let msg;
  if (!err.response && !err.data)
    dispatch(
      setError({
        key,
        error: "There seems to be an issue currently, please try again",
      })
    );
  else if (!err.error) {
    msg = err.error;
    dispatch(setError(err.error));
  } else {
    // handle server server based errors
    if (err.message === "Failed to fetch") {
      dispatch(
        setError({
          key,
          error: "Request was cancelled, please try again",
        })
      );
    } else {
      let _msg =
        // err.response.data.customMessage ||
        // err.response.data.message ||
        err.response.data || err.response.data.error || err.data;
      if (typeof msg === "object") {
        msg = _msg.reduce(
          (aggr, errObj) => aggr + errObj.msg + ",",
          ""
        );
      }
      dispatch(setError({ key, error: msg }));
      dispatch(stopLoad(key));
    }
  }
  if (err.response?.data?.statusCode === 401) {
    // console.log("Now logging out");
    localStorage.clear();
  }
  console.log(msg);
  throw err;
};

// export {
//   loginOwner,
// } from "./authAction";

