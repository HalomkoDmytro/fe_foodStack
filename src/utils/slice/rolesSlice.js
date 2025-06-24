import { createSlice } from '@reduxjs/toolkit';

const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    value: []
  },
  reducers: {
    setRoles: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setRoles } = rolesSlice.actions;
export default rolesSlice.reducer;