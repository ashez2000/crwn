import { Provider as JotaiProvider } from 'jotai'

import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Provider({ children }: Props) {
  return <JotaiProvider>{children}</JotaiProvider>
}
