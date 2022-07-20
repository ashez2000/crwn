import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

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
