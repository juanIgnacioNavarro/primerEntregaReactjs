import { createContext, useContext, useEffect, useState } from 'react'
import { Storage } from '../../utils/storage'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => Storage.get('items') || [])

  useEffect(() => {
    Storage.add('items', items)
  }, [items])

  const addItem = (item, quantity) => {
    if (isInCard(item.id)) return

    setItems(prev => [...prev, { ...item, quantity }])
  }

  const removeItem = (id) => setItems(prev => prev.filter((item) => item.id !== id))

  const clearItems = () => setItems([])

  const isInCard = (id) => items.some(item => item.id === id) // true o false

  const getTotal = () => parseFloat(items.reduce((acc, current) => acc + current?.price, 0)).toFixed(2)

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, clearItems, total: getTotal()
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

export default CartProvider