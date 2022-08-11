import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../../lib/firebase/firebase.lib'
import { setCurrentUser } from '../../store/auth/auth.slice'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
        dispatch(
          setCurrentUser({ displayName: user?.displayName, email: user?.email })
        )
      } else {
        dispatch(setCurrentUser(null))
      }
    })

    return unsubscribe
  }, [])

  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
