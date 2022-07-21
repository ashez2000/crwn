import { Link } from 'react-router-dom'

import { useCollection } from '../../contexts/collection/collection.context'
import ItemCard from '../item-card/item-card.component'

const CollectionsPreview = () => {
  const { collections } = useCollection()

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
        <h3 className="text-dark mb-4">{title.toUpperCase()}</h3>
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
