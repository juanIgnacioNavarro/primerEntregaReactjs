import MyOrderList from '../../components/MyOrderList' 
import { getOrders } from '../../firebaseConfig/orders' 
import { useEffect, useState } from 'react'

const MyOrders = () => {
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setLoading(true)

    getOrders(orders.id)
      .then(setOrders)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [orders.id])

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
  bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        Id's de compras
      </h1>
       <MyOrderList loading={loading} orders={orders} /> 
    </>
  )
}

export default MyOrders