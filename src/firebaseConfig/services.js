import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from './config'

export const getItem = (id) => {

  const item = doc(db, 'items', id)
  return getDoc(item)
}

export const getItems = (category) => {


  const items = query(collection(db, 'items'), category && where('category','==', category))
  return getDocs(items)

}

export const listadoId = () => {

  const id = query(collection(db, "IdCompra"))
  return getDoc(id)

}