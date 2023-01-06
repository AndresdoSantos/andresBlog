import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Moon, Sun } from 'phosphor-react'

type Theme = 'light' | 'dark'

export function ToggleTheme() {
  const { reload } = useRouter()

  const [theme, setTheme] = useState<Theme | null>(null)

  const handleChangeTheme = () => {
    const theme = window.localStorage.getItem('color-theme')

    window.localStorage.setItem(
      'color-theme',
      theme === 'light' ? 'dark' : 'light',
    )

    setTheme(theme as Theme)

    reload()
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('color-theme')

    setTheme(theme as Theme)
  }, [])

  return (
    <button onClick={handleChangeTheme}>
      {theme === 'dark' ? (
        <Sun weight="duotone" size={18} />
      ) : (
        <Moon weight="duotone" size={18} />
      )}
    </button>
  )
}
