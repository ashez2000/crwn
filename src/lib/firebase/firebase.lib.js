import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
} from 'firebase/firestore'

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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)

// Firestore
export const firestore = getFirestore(app)

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(firestore, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const getCollectionsAndDocuments = async () => {
  const collectionRef = collection(firestore, 'collections')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}
