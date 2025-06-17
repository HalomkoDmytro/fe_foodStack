import { configureStore } from '@reduxjs/toolkit'
import searchRequestReducer from './slice/searchRequestSlice';

export default configureStore({
  reducer: {
    text: searchRequestReducer,
  },

})