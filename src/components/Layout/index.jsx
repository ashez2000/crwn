import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
