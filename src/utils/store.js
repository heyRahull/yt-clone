import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
    category: categorySlice,
  },
});

export default store;
