import { useParams } from 'react-router-dom'

import { useCollection } from '../../contexts/collection/collection.context'
import ItemCard from '../../components/item-card/item-card.component'

const CollectionPage = () => {
  const { collections } = useCollection()
  const { collectionId } = useParams()
  const collection = collections[collectionId]

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
