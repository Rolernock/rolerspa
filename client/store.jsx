import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './src/slices/messageSlice'

const store = configureStore({
  reducer: {
    messages: messageReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
