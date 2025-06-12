import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    data: {},
  },
  reducers: {
    setArticle: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setArticle } = articleSlice.actions;
export default articleSlice.reducer;