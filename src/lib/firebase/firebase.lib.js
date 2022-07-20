import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCzO8-LMfqkTjntHogcniZ481-ozOJFiy0',
  authDomain: 'crwn-ecom-352ff.firebaseapp.com',
  projectId: 'crwn-ecom-352ff',
  storageBucket: 'crwn-ecom-352ff.appspot.com',
  messagingSenderId: '119241707191',
  appId: '1:119241707191:web:fa165101741efbb8b64732',
}

const app = initializeApp(firebaseConfig)

// Auth
const googleAuthProvider = new GoogleAuthProvider()
export const auth = getAuth(app)
export const googleLoginWithPopup = () =>
  signInWithPopup(auth, googleAuthProvider)

// Firestore
export const firestore = getFirestore(app)
