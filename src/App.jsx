import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import HomePage from './pages/home.page'
import LoginPage from './pages/login.page'
import SignUpPage from './pages/signup.page'
import ShopPage from './pages/shop/shop.page'
import CheckoutPage from './pages/checkout.page'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
