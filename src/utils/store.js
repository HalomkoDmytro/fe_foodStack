import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './articleSlice'
import textReducer from './slice/textSlice';

export default configureStore({
  reducer: {
    article: articleReducer,
    text: textReducer,
  },

})