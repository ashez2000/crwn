import Link from 'next/link'
import { useSelector } from 'react-redux'

import ItemCard from './ItemCard'
import { selectCollectionsMap } from '../store/collection/collection.selector'

const CategoryPreview = () => {
  const collections = useSelector(selectCollectionsMap)

  return (
    <main className="max-w-4xl mx-auto px-3">
      {Object.keys(collections).map((k) => {
        return (
          <SingleCategoryPreview key={k} title={k} items={collections[k]} />
        )
      })}
    </main>
  )
}

const SingleCategoryPreview = ({ title, items }) => {
  return (
    <div className="">
      <Link href={`/shop/${title}`}>
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

export default CategoryPreview
