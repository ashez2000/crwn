import MainLayout from '../layouts/MainLayout'
import Categories from '../components/Categories'

const HomePage = () => {
  return (
    <MainLayout>
      <main className="px-3 max-w-4xl mx-auto">
        <Categories />
      </main>
    </MainLayout>
  )
}

export default HomePage
