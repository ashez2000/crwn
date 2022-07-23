import { createSlice } from '@reduxjs/toolkit'
import { fetchCollectionAndDocuments } from './collection.action'

const initialState = {
  collections: [],
}

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setCollection: (state, action) => {
      state.collections = action.payload
    },
  },
  extraReducers: {
    [fetchCollectionAndDocuments.fulfilled]: (state, action) => {
      state.collections = action.payload
    },
  },
})

export const { setCollection } = collectionSlice.actions
export default collectionSlice.reducer
