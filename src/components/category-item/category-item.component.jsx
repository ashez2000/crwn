const CategoryItem = ({ category }) => {
  return (
    <div className="card w-100 d-flex flex-column justify-content-center align-items-center my-3 p-5">
      <h3>{category.title}</h3>
      <span>Shop now</span>
    </div>
  )
}

export default CategoryItem
