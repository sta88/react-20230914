import { configureStore } from "@reduxjs/toolkit";

import dishes from "./entities/dishes";
import restaurants from "./entities/restaurants";
import reviews from "./entities/reviews";
import users from "./entities/users";
import request from "./ui/request";
import cart from "./ui/cart";
import { loggerMiddleware } from "./middlewares/logger";

const store = configureStore({
  reducer: {
    dishes,
    restaurants,
    reviews,
    users,
    request,
    cart
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware],
});

export default store;