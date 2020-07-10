import React from "react"
import Navegacion from "./Navegacion"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <div>
      <SEO/>
      <Navegacion />
        {children}
      </div>
    </>
  )
}


export default Layout
