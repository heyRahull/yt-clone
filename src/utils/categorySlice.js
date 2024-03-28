import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    id: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
