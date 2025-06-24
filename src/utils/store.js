import { configureStore } from '@reduxjs/toolkit'
import searchRequestReducer from './slice/searchRequestSlice';
import rolesSliceReducer from './slice/rolesSlice';

export default configureStore({
  reducer: {
    text: searchRequestReducer,
    roles: rolesSliceReducer,
  },

})