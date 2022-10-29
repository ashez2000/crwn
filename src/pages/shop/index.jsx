import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CategoryPreview from '../../components/CategoryPreview'
import { fetchCollectionAndDocuments } from '../../store/collection/collection.action'
import MainLayout from '../../layouts/MainLayout'

const ShopPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionAndDocuments())
  }, [])

  return (
    <MainLayout>
      <CategoryPreview />
    </MainLayout>
  )
}

export default ShopPage
