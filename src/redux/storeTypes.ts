import { store } from "./store";

export type RootState = Readonly<ReturnType<typeof store.getState>>;
export type AppDispatch = typeof store.dispatch;
