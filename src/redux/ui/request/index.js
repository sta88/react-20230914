import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "../../../constants/statuses";

const { reducer } = createSlice({
  name: 'request',
  initialState: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state, {meta}) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.pending,
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, {meta}) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.fulfilled,
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, {meta, error}) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.rejected,
            error
          }
        }
      )
});

export default reducer;