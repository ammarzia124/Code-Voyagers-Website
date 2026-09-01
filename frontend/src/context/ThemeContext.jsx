import { createContext, useContext, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme] = useState('light')
  const reducedMotion = useReducedMotion()

  return (
    <ThemeContext.Provider value={{ theme, setTheme: () => {}, reducedMotion }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
