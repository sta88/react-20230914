import { configureStore } from "@reduxjs/toolkit";

import dishes from "./entities/dishes";
import restaurants from "./entities/restaurants";
import reviews from "./entities/reviews";
import users from "./entities/users";

const store = configureStore({
  reducer: {
    dishes,
    restaurants,
    reviews,
    users
  },
});

export default store;