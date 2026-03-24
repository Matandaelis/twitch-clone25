import { configureStore } from "@reduxjs/toolkit";

import siteReducers from "./site";
import userReducers from "./user";
import categoryReducers from "./category";
import productReducers from "./product";
import streamingReducers from "./streaming";

export default configureStore({
  reducer: {
    site: siteReducers,
    user: userReducers,
    category: categoryReducers,
    product: productReducers,
    streaming: streamingReducers,
  },
});
