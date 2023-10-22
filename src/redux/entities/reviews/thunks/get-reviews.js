import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIds } from "../selectors";
import { selectRestaurantReviewsById } from "../../restaurants/selectors";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviews = selectRestaurantReviewsById(
        state,
        restaurantId
      );
      const reviewsIds = selectReviewsIds(state);

      return (
        restaurantReviews &&
        restaurantReviews.some((reviewId) => !reviewsIds.includes(reviewId))
      );
    },
  }
)