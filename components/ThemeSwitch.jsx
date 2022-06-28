import { useState } from 'react'
import DarkTheme from './DarkTheme'

const loadDarkMode = () => {
  if (typeof localStorage === 'undefined') return false

  const value = localStorage.getItem('darkMode')
  return (value === null) ? false : JSON.parse(value)
}

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode)
  const text = darkMode ? 'Light Mode' : 'Dark Mode'

  const handleClick = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  }

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>{text}</button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
      {darkMode && <DarkTheme/>}
    </>
  )
}

export default ThemeSwitch
