import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/bootstrap.min.css'
import './styles/main.css'

import App from './App'
import { AuthProvider } from './contexts/auth/auth.context'
import { CollectionProvider } from './contexts/collection/collection.context'
import { CartProvider } from './contexts/cart/cart.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CollectionProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CollectionProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
