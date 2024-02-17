import { configureStore } from "@reduxjs/toolkit";
import dragDropReducer from "./features/drag-drop/drag-drop.slice";

const store = configureStore({
  reducer: {
    dragItems: dragDropReducer,
  },
});

export type storeState = ReturnType<typeof store.getState>;

export default store;
