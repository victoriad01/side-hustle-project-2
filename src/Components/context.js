import React, { useState, useContext,useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [inCart, setInCart] = useState([])

  const newArray = [...inCart]


  const [orderArray, setOrderArray] = useState([])
    useEffect(() => {
      setOrderArray([...inCart])
    }, [inCart])

    useEffect(()=>{
      console.log("orderArrayChaged")
    },[orderArray])

  console.log(inCart)
  console.log(newArray)
  console.log(orderArray)

  const [toggle, setToggle] = useState({ modal: false, item: null })
  const [order, setOrder] = useState({ modal: false, item: null })
  const [cart, setCart] = useState({ modal: false, item: null })

  const [payment, setPayment] = useState({ modal: false, item: null })

  const [orderStore, setOrderStore] = useState({ modal: false, item: null })

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
  const addToCart = (detailToCart) => {
    // setInCart(inCart.slice().push(eachOfTwelve))
    inCart.push(detailToCart)
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

  const openOrderStore = () => {
    setOrderStore({ ...orderStore, modal: true })
  }
  const closeOrderStore = () => {
    setOrderStore({ ...orderStore, modal: false })
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
        orderStore,
        openOrderStore,
        closeOrderStore,
        newArray,
        orderArray,
        setOrderArray
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
