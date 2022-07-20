import { useContext, createContext, useState } from 'react'

const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const value = {
    currentUser,
    setCurrentUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
