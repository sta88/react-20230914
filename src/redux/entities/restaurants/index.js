import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

const { reducer, actions } = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState(),
  reducers: {
    addNewReview: (state, { payload: { restaurantId, reviewId } }) => {
      entityAdapter.updateOne(state, {
        id: restaurantId,
        changes: {
          reviews: [...state.entities[restaurantId].reviews, reviewId],
        },
      });
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        getRestaurants.fulfilled,
        (state, { payload }) => {
          entityAdapter.setAll(state, payload);
        }),
});

export default reducer;
export { actions as restaurantActions };