import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/bootstrap.min.css'
import './styles/main.css'

import App from './App'
import { CollectionProvider } from './contexts/collection/collection.context'
import { CartProvider } from './contexts/cart/cart.context'
import ReduxProvider from './store/provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <CollectionProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CollectionProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
)
