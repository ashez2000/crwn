import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionPage from './collection.page'
import CollectionsPreview from '../../components/collection-preview/collections-preview.component'
import { fetchCollectionAndDocuments } from '../../store/collection/collection.action'

const ShopPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionAndDocuments())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<CollectionsPreview />} />
      <Route path="/:collectionId" element={<CollectionPage />} />
    </Routes>
  )
}

export default ShopPage
