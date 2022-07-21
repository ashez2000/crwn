import { useParams } from 'react-router-dom'

import { useCollection } from '../../contexts/collection/collection.context'
import ItemCard from '../../components/item-card/item-card.component'

const CollectionPage = () => {
  const { collections } = useCollection()
  const { collectionId } = useParams()
  const collection = collections[collectionId]

  if (!collection) {
    return <div>Loading...</div>
  }

  return (
    <section className="container">
      <h4 className="text-center text-primary mb-4">
        {collectionId.toUpperCase()}
      </h4>
      <div className="row">
        {collection.map((item) => {
          return (
            <div className="col-12 col-md-3" key={item.id}>
              <ItemCard item={item} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CollectionPage
