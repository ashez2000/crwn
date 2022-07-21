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
