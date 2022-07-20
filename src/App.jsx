import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/home.page'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  )
}

export default App
