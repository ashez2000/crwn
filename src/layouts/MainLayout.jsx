import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../lib/firebase/firebase.lib'
import { setCurrentUser } from '../store/auth/auth.slice'

import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
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
      <Container as="main">{children}</Container>
      <Footer />
    </div>
  )
}

export default MainLayout
