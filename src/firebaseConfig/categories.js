import { collection, getDocs } from 'firebase/firestore'
import { db } from './config'

export const getCategories = async () => {
  const categories = collection(db, 'categories')
  return getDocs(categories).then((snapshots) => {
    return snapshots.docs.map((snapshot) => ({
      id: snapshot.id,
      ...snapshot.data()
    }))
  })
}