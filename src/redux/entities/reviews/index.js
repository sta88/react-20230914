import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";
import { REQUEST_STATUS } from "../../../constants/statuses";
import { addReview } from "./thunks/add-review";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(
        getReviews.fulfilled,
        (state, { payload }) => {
          entityAdapter.setMany(state, payload);
        })
      .addCase(
        addReview.fulfilled,
        (state, { payload } = {}) => {
          entityAdapter.addOne(state, payload);
        }),
});

export default reducer;