import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState({ modal: false, item: null })
  const [order, setOrder] = useState({ modal: false, item: null })
  const [cart, setCart] = useState({ modal: false, item: null })
  const [payment, setPayment] = useState({ modal: false, item: null })
  
  const [inCart, setInCart] = useState([])

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
  const addToCart = (eachOfTwelve) => {
    inCart.push(eachOfTwelve)
  }

  const openCart = (index) => {
    setCart({ modal: true, item: index })
  }

  const closeCart = () => {
    setCart({ ...cart, modal: false })
  }
  const openPayment = () => {
    setPayment({ ...cart, modal: true })
  }
  const closePayment = () => {
    setPayment({ ...cart, modal: false })
  }

  return (
    <AppContext.Provider
      value={{
        toggle,
        openModal,
        closeModal,
        cart,
        openCart,
        closeCart,
        addToCart,
        inCart,
        setInCart,
        order,
        openOrder,
        closeOrder,
        payment,
        openPayment,
        closePayment,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
