import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../firebaseConfig/categories'
import { useCategories } from '../../hooks/useCategories'

const Filters = () => {
  const { categories, getCategories } = useCategories()

  useEffect(() => {
    getCategories()
  }, [getCategories])

  return (
    <nav className='flex justify-center gap-2'>
      {categories.map(({ id, category }) => (
        <NavLink
          key={id}
          end
          to={`/category/${category}`}
          className={({ isActive }) => `px-2 py-1 rounded-md hover:bg-indigo-100 ${isActive ? 'bg-indigo-100' : ''}`}
        >
          {category}
        </NavLink>
      ))}
    </nav>
  )
}

export default Filters