import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "../selectors";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async () => {
        const response = fetch('http://localhost:3001/api/users/');
        return (await response).json();
    },
    {
        condition: (_, {getState}) => !selectUsersIds(getState()).length,
    }
)