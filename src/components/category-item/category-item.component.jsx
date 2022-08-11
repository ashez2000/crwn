const CategoryItem = ({ category }) => {
  return (
    <div
      className="relative h-48 rounded-md overflow-hidden cursor-pointer"
      onClick={() => navigate(`/shop/${category.title}`)}
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <span className="bg-white opacity-60 text-center p-3 rounded-md">
          <h3 className="text-2xl font-semibold opacity-100">
            {category.title}
          </h3>
          <p className="opacity-100">Shop Now</p>
        </span>
      </div>
      <div
        className="h-full bg-cover"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
    </div>
  )
}

export default CategoryItem
