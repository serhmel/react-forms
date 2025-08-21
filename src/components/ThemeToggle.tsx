import React, { useCallback, useEffect, useState } from 'react'

import { THEMES } from '../helpers'

export type Theme = typeof THEMES[keyof typeof THEMES]

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const thumbPos = theme === THEMES.DARK ? 'translate-x-6' : 'translate-x-0'

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={ toggleTheme }
        className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 transition-theme">

        <div className={ `w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${ thumbPos }` }/>
        <span className="absolute left-2 text-xs">☀️</span>
        <span className="absolute right-2 text-xs">🌙</span>
      </button>
    </div>
  )
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || THEMES.LIGHT
  })

  useEffect(() => {
    document.documentElement.classList.toggle(THEMES.DARK, theme === THEMES.DARK)

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))
  }, [])

  return { theme, toggleTheme }
}
