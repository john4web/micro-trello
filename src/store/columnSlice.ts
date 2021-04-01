import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column } from "../types/types";
import { v4 as uuid } from "uuid";

type ColumnState = {
  columns: Column[];
};

const initialState: ColumnState = {
  columns: [],
};

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addColumn(state, action: PayloadAction<Column>) {
      state.columns.push({
        //Generate the id outside
        id: uuid(),
        name: action.payload.name,
      });
    },
  },
});

export default columnSlice.reducer;

export const { addColumn } = columnSlice.actions;
