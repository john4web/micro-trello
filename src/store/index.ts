import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";

export const store = configureStore({
    reducer: {
        member: memberReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
