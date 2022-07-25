const dotenv = require('dotenv')
dotenv.config({ path: '.env.local' })

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body)

    const intent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: data.currency,
      payment_method_types: ['card'],
    })

    return {
      statusCode: 200,
      body: JSON.stringify(intent),
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: err.message,
    }
  }
}
