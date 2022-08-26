import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState({ modal: false, item: null })

  // Handle Order
  const [order, setOrder] = useState({ modal: false, item: null })

  // Handle Cart
  const [cart, setCart] = useState({ modal: false, item: null })

  const openModal = (index) => {
    setToggle({ modal: true, item: index })
  }
  const closeModal = () => {
    setToggle({ ...toggle, modal: false })
  }

  // Handle Order
  const openOrder = (index) => {
    setOrder({ modal: true, item: index })
  }
  const closeOrder = () => {
    setOrder({ ...order, modal: false })
  }

  // Handle Cart
  const openCart = (index) => {
    setCart({ modal: true, item: index })
  }
  const closeCart = () => {
    setCart({ ...cart, modal: false })
  }

  return (
    <AppContext.Provider value={{ toggle, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
