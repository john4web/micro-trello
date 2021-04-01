import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../types/types";
import { v4 as uuid } from "uuid";

type CategoryState = {
  categories: Category[];
};

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.categories.push({
        //Generate the id outside
        id: uuid(),
        name: action.payload.name,
      });
    },
  },
});

export default categorySlice.reducer;

export const { addCategory } = categorySlice.actions;
