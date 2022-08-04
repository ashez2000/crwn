import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ItemCard from '../item-card/item-card.component'
import { selectCollectionsMap } from '../../store/collection/collection.selector'

const CollectionsPreview = () => {
  const collections = useSelector(selectCollectionsMap)

  return (
    <main className="max-w-4xl mx-auto px-3">
      {Object.keys(collections).map((k) => {
        return (
          <SingleCollectionPreview key={k} title={k} items={collections[k]} />
        )
      })}
    </main>
  )
}

const SingleCollectionPreview = ({ title, items }) => {
  return (
    <div className="">
      <Link to={`/shop/${title}`}>
        <h3 className="text-2xl text-center text-yellow-500 font-semibold mb-10">
          {title.toUpperCase()}
        </h3>
      </Link>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        {items
          .filter((item, idx) => idx < 3)
          .map((item) => (
            <div className="col-12 col-md-3 mb-4" key={item.id}>
              <ItemCard item={item} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default CollectionsPreview
