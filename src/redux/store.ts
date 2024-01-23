import { configureStore } from "@reduxjs/toolkit";

import { taskSlice } from "../app/modules/tasks/redux/slice";

//configuração da store do redux
const store = configureStore({
  reducer: {
    task: taskSlice.reducer
  },
  devTools: process.env.NODE_ENV === "development"
});

export { store };
