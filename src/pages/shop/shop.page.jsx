import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionPage from './collection.page'
import CollectionsPreview from '../../components/collection-preview/collections-preview.component'

import { getCollectionsAndDocuments } from '../../lib/firebase/firebase.lib'
import { setCollection } from '../../store/collection/collection.slice'

const ShopPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCollectionsAndDocuments = async () => {
      const collectionsAndDocuments = await getCollectionsAndDocuments()
      dispatch(setCollection(collectionsAndDocuments))
    }

    fetchCollectionsAndDocuments()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<CollectionsPreview />} />
      <Route path="/:collectionId" element={<CollectionPage />} />
    </Routes>
  )
}

export default ShopPage
