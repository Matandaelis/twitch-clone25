import { configureStore } from "@reduxjs/toolkit";

import siteReducers from "./site";
import userReducers from "./user";
import categoryReducers from "./category";
import productReducers from "./product";
import streamingReducers from "./streaming";
import cartReducers from "./cart";
import reactionsReducers from "./reactions";
import analyticsReducers from "./analytics";

export default configureStore({
  reducer: {
    site: siteReducers,
    user: userReducers,
    category: categoryReducers,
    product: productReducers,
    streaming: streamingReducers,
    cart: cartReducers,
    reactions: reactionsReducers,
    analytics: analyticsReducers,
  },
});
