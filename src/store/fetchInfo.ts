import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./index";

const fetch = (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["1", "2"]);
        }, 1000);
    });
};

export const fetchInfo = createAsyncThunk(
    "fetchInfo",
    async (id: string, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;

        const data = await fetch();

        return data;
    }
);
