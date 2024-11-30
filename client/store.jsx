import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './src/slices/messageSlice'

const store = configureStore({
  reducer: {
    messages: messageReducer
  }
})

export default store
