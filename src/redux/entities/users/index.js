import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";
import { REQUEST_STATUS } from "../../../constants/statuses";

const entityAdapter = createEntityAdapter();

const {reducer} = createSlice({
    name: 'user',
    initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) =>
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = REQUEST_STATUS.pending;
            })
            .addCase(getUsers.fulfilled, (state, {payload}) => {
                entityAdapter.setAll(state, payload);
                state.status = REQUEST_STATUS.fulfilled;
            })
            .addCase(getUsers.rejected, (state) => {
                state.status = REQUEST_STATUS.rejected;
            }),
});

export default reducer;