import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ItemCard from '../item-card/item-card.component'
import { selectCollectionsMap } from '../../store/collection/collection.selector'

const CollectionsPreview = () => {
  const collections = useSelector(selectCollectionsMap)

  return (
    <div className="px-3">
      {Object.keys(collections).map((k) => {
        return (
          <SingleCollectionPreview key={k} title={k} items={collections[k]} />
        )
      })}
    </div>
  )
}

const SingleCollectionPreview = ({ title, items }) => {
  return (
    <div>
      <Link to={`/shop/${title}`}>
        <h3 className="text-2xl text-center text-yellow-500 font-semibold mb-10">
          {title.toUpperCase()}
        </h3>
      </Link>
      <div className="row">
        {items
          .filter((item, idx) => idx < 4)
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
