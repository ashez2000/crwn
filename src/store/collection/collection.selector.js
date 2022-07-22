import { createSelector } from '@reduxjs/toolkit'

const selectCollections = (state) => state.collection

export const selectCollectionsMap = createSelector(
  [selectCollections],
  (collection) =>
    collection.collections.reduce((acc, collection) => {
      const { title, items } = collection
      acc[title.toLowerCase()] = items
      return acc
    }, {})
)
