import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'

import './styles/bootstrap.min.css'
import './styles/main.css'

import App from './App'
import ReduxProvider from './store/provider'
import { stripePromise } from './lib/stripe/stripe.lib'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
)
