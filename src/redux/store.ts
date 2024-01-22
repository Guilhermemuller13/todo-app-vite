import { configureStore } from "@reduxjs/toolkit";

import { taskSlice } from "../app/modules/tasks/redux/slice";

const store = configureStore({
  reducer: {
    task: taskSlice.reducer
  },
  devTools: process.env.NODE_ENV === "development"
});

export { store };
