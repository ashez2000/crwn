import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCollectionsAndDocuments } from '../../lib/firebase/firebase.lib'

import ItemCard from '../../components/item-card/item-card.component'

const CollectionPage = () => {
  const [collection, setCollection] = useState([])
  const [loading, setLoading] = useState(true)

  const { collectionId } = useParams()

  useEffect(() => {
    const fetchCollection = async () => {
      const c = await getCollectionsAndDocuments()
      setCollection(c[collectionId])
      setLoading(false)
    }

    fetchCollection()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <section className="container">
      <h3>{collectionId.toUpperCase()}</h3>
      {collection.map((item) => {
        return <ItemCard key={item.id} item={item} />
      })}
    </section>
  )
}

export default CollectionPage
