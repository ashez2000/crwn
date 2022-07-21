import { createContext, useState, useEffect, useContext } from 'react'

import { getCollectionsAndDocuments } from '../../lib/firebase/firebase.lib'

const CollectionContext = createContext({
  collections: {},
})

export const useCollection = () => useContext(CollectionContext)

export const CollectionProvider = ({ children }) => {
  const [collections, setCollections] = useState({})

  useEffect(() => {
    const fetchCollection = async () => {
      const c = await getCollectionsAndDocuments()
      setCollections(c)
    }

    fetchCollection()
  }, [])

  const value = { collections }

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  )
}
