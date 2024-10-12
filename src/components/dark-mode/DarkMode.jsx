import React from 'react'
import styles from './DarkMode.module.css'
import useLocalStorage from '../../custom_hooks/useLocalstorage'

const DarkMode = () => {
  const [theme,setTheme] = useLocalStorage('theme','dark')

  const handleToggleTheme = ()=>{
    setTheme(theme==='dark'?'light':'dark')
  }

  return (
    <div className={styles.wrapper} data-theme={theme}>
      <h3 className={styles.heading}>Toggle Theme</h3>
      <button className={styles.themebtn} onClick={handleToggleTheme} >Change Theme</button>
    </div>
  )
}

export default DarkMode