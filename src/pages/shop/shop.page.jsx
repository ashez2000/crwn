import { Routes, Route } from 'react-router-dom'
import CollectionPage from './collection.page'
import CollectionsPreview from '../../components/collection-preview/collections-preview.component'

const ShopPage = () => {
  return (
    <Routes>
      <Route path="/" element={<CollectionsPreview />} />
      <Route path="/:collectionId" element={<CollectionPage />} />
    </Routes>
  )
}

export default ShopPage
