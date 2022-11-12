import { configureStore } from "@reduxjs/toolkit";

import mouseStateReducer from "../features/mouseState/mouseStateSlice";
import rangesReducer from "../features/ranges/rangesSlice";

export const store = configureStore({
  reducer: {
    mouseState: mouseStateReducer,
    ranges: rangesReducer,
  },
});
