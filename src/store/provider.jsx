import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import authReducer from './auth/auth.slice'
import collectionReducer from './collection/collection.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    collection: collectionReducer,
  },
})

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
