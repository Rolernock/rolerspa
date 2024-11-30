import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

const initialState = {
  msg: []
}

export const readMessages = createAsyncThunk(
  '/message/readMessage',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/message')
      return data
    } catch (err) {
      const error = err.response.data.errors
      return rejectWithValue(error)
    }
  }
)

export const sendMessage = createAsyncThunk(
  '/message/sendMessage',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/message', formData)
      toast.success(data.msg)
      return data
    } catch (err) {
      const error = err.response.data.errors
      return rejectWithValue(error)
    }
  }
)

export const deleteMessage = createAsyncThunk(
  '/message/deleteMessage',
  async (msgId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/message/${msgId}`)
      return toast.success(data.msg)
    } catch (err) {
      const error = err.response.data
      return rejectWithValue(error)
    }
  }
)

const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers: builder => {
    builder.addCase(readMessages.fulfilled, (state, action) => {
      state.msg = action.payload
    })
  }
})

export default messageSlice.reducer
