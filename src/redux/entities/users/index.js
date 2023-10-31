import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";
import { REQUEST_STATUS } from "../../../constants/statuses";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'user',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(
        getUsers.fulfilled,
        (state, { payload }) => {
          entityAdapter.setAll(state, payload);
        }),
});

export default reducer;