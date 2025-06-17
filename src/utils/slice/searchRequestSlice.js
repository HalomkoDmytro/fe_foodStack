import { createSlice } from '@reduxjs/toolkit';

const searchRequestSlice = createSlice({
  name: 'text',
  initialState: {
    value: ''
  },
  reducers: {
    setSearchRequest: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setSearchRequest } = searchRequestSlice.actions;
export default searchRequestSlice.reducer;