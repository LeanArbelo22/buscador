import { createSlice } from "@reduxjs/toolkit";
import initialData from "../../data";

const initialState = {
  value: "",
  initialData,
  filteredData: initialData, // Comienza con los resultados iniciales
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { setValue, setFilteredData } = searchSlice.actions;

export default searchSlice.reducer;
