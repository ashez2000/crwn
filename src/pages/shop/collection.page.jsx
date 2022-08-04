import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ItemCard from '../../components/item-card/item-card.component'

import { selectCollectionsMap } from '../../store/collection/collection.selector'

const CollectionPage = () => {
  const { collectionId } = useParams()
  const collections = useSelector(selectCollectionsMap)
  const collection = collections[collectionId]

  if (!collection) {
    return <div>Loading</div>
  }

  return (
    <main className="max-w-4xl mx-auto px-3">
      <h4 className="text-2xl text-center text-yellow-500 font-semibold mb-10">
        {collectionId.toUpperCase()}
      </h4>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-6">
        {collection.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

export default CollectionPage
