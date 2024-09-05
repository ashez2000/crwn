import ioredis from 'ioredis'
import loadenv from './loadenv.js'

const redisUrl = loadenv('REDIS_URL')
const redis = new ioredis.Redis(redisUrl)

export default redis
