import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CategoryPreview from '../../components/CategoryPreview'
import { fetchCollectionAndDocuments } from '../../store/collection/collection.action'

const ShopPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionAndDocuments())
  }, [])

  return <CategoryPreview />
}

export default ShopPage
