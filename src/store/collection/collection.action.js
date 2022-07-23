import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCollectionsAndDocuments } from '../../lib/firebase/firebase.lib'

export const fetchCollectionAndDocuments = createAsyncThunk(
  'collection/fetchCollectionAndDocuments',
  async () => {
    const collectionsAndDocuments = await getCollectionsAndDocuments()
    return collectionsAndDocuments
  }
)
