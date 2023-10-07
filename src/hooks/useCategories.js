import { getCategories } from '../firebaseConfig/categories'
import { useState, useCallback, useMemo } from 'react'

export const useCategories = () => {
  const [categories, setCategories] = useState([])

  const handleGetCategories = useCallback(() => {
    getCategories()
      .then(setCategories)
      .catch(console.error)
  }, [])

  return {
    categories,
    getCategories: handleGetCategories
  }
}