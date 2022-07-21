import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCollectionsAndDocuments } from '../../lib/firebase/firebase.lib'

import ItemCard from '../item-card/item-card.component'

const CollectionsPreview = () => {
  const [collections, setCollections] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCollection = async () => {
      const c = await getCollectionsAndDocuments()
      setCollections(c)
      setLoading(false)
    }

    fetchCollection()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  console.log(collections)

  return (
    <section className="container">
      {Object.keys(collections).map((k) => {
        return (
          <SingleCollectionPreview key={k} title={k} items={collections[k]} />
        )
      })}
    </section>
  )
}

const SingleCollectionPreview = ({ title, items }) => {
  return (
    <div>
      <Link to={`/shop/${title}`}>
        <h1>{title.toUpperCase()}</h1>
      </Link>
      <div>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}

export default CollectionsPreview
