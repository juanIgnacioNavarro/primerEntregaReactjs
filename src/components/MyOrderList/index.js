import { useEffect, useState } from "react"
import { listadoId } from "../../firebaseConfig/services"

const MyOrderList = () => {
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState([])

  useEffect(() => {
    setLoading(true)
    listadoId(setId)
  }, [id])
  
console.log(id)
  return (

    <div>

    </div>
  )
}

export default MyOrderList