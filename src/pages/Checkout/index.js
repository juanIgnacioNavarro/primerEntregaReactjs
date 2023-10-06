import CheckoutForm from '../../components/CheckoutForm'
import { useCart } from '../../context/CartProvider'
import { addOrder } from '../../firebaseConfig/orders'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Checkout = () => {
  const { items, clearItems, total = 0 } = useCart()
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const createOrder = async (payload) => {
    try {
      setLoading(true)
      const order = {
        items,
        total
      }

      const newOrder = await addOrder(items, order)
      if (!newOrder) return toast.error('....')
      setOrderId(newOrder.id)
      clearItems()
    } catch (error) {
      console.error({ error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
        bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        Id de compra
      </h1>
      {orderId
        ? (
          <div className='bg-white rounded-md shadow-sm px-8 p-4 text-center font-bold'>
            {orderId}
          </div>)
        : <CheckoutForm onConfirm={createOrder} loading={loading}/>}
    </>
  )
}

export default Checkout