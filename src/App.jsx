import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/home.page'
import LoginPage from './pages/login.page'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  )
}

export default App
