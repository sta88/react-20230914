import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantMenuById } from "../../restaurants/selectors";
import { selectDishesIds } from "../selectors";

export const getDishes = createAsyncThunk(
    "dishes/getDishes",
    async (restaurantId) => {
        const response = fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        return (await response).json();
    },
    {
        condition: (restaurantId, { getState }) => {
          const state = getState();
          const restaurantDishes = selectRestaurantMenuById(
            state,
            restaurantId
          );
          const dishesIds = selectDishesIds(state);

          return (
            restaurantDishes &&
            restaurantDishes.some((dishId) => !dishesIds.includes(dishId))
          );
        },
    }
)