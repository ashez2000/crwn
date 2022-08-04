import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { selectCurrentUser } from '../../store/auth/auth.selector'
import { selectCartTotal } from '../../store/cart/cart.selector'

const PaymentForm = () => {
  const [loading, setLoading] = useState(false)

  const currentUser = useSelector(selectCurrentUser)
  const cartTotal = useSelector(selectCartTotal)

  const stripe = useStripe()
  const elements = useElements()

  const handlePayment = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)

    const data = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: cartTotal * 80 * 100,
        currency: 'inr',
      }),
    }).then((res) => res.json())

    const clientSecret = data.client_secret

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName,
        },
      },
    })

    setLoading(false)

    if (result.error) {
      alert(result.error.message)
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!')
      }
    }
  }

  return (
    <form className="px-3" onSubmit={handlePayment}>
      <CardElement className="w-full mb-3 px-3 py-2 outline-none rounded-md bg-gray-200" />

      <button
        className="w-full text-center px-3 py-2 rounded-md bg-yellow-200 font-semibold mb-3 cursor-pointer"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  )
}

export default PaymentForm
