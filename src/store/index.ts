import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";
import infoReducer from "./infoSlice";

export const store = configureStore({
    reducer: {
        member: memberReducer,
        info: infoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
