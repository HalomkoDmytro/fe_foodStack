import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './articleSlice'
import counterReducer from '../counter/counterSlice' // todo delete

export default configureStore({
  reducer: {
    article: articleReducer,
    counter: counterReducer,
  },

})