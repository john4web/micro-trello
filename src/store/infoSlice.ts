import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchInfo } from "./fetchInfo";

type InfoState = {
    data: string[];
};

const initialState: InfoState = {
    data: [],
};

const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchInfo.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export default infoSlice.reducer;
