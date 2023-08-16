import { createSlice } from "@reduxjs/toolkit";
import initialData from "../../data";

const initialState = {
  value: "",
  loading: false,
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
    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setValue, setFilteredData, setIsLoading } = searchSlice.actions;

export default searchSlice.reducer;
