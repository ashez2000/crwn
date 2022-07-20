import { useContext, createContext, useState, useEffect } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../../lib/firebase/firebase.lib'

const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    currentUser,
    setCurrentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
