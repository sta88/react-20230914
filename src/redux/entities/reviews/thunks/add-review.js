import { createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantActions } from "../../restaurants";

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async ({ restaurantId, newReview }, { dispatch }) => {
    const response = fetch(`http://localhost:3001/api/review/${restaurantId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newReview),
      }
    );

    const review = await response.json();

    dispatch(
      restaurantActions.addNewReview({ restaurantId, reviewId: review.id })
    );

    return review;
  },
)