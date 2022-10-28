import React from 'react'

import Header from "./Header"

interface Props {
    children: React.ReactElement
}

const Layout: React.FC<Props> = ({children}): JSX.Element => {
  return (
    <main>
        <Header />
        {children}
    </main>
  )
}

export default Layout