import mongoose from 'mongoose'

const conn = {}

export const connectDB = async () => {
  if (conn.isConnected) return

  if (mongoose.connections.length > 0) {
    conn.isConnected = mongoose.connections[0].readyState
    if (conn.isConnected === 1) return

    await mongoose.disconnect()
  }

  const db = await mongoose.connect(process.env.MONGODB_URI)
  console.log('DB Connected')
  conn.isConnected = db.connections[0].readyState
}

export const disconnectDB = async () => {
  if (conn.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      conn.isConnected = false
    } else {
      console.log('Not disconnected')
    }
  }
}
