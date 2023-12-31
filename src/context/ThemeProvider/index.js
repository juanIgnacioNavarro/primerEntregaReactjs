import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const handleSetTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      
    </div>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider