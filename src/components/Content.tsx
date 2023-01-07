import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Content({ children }: Props) {
  return (
    <main className="w-screen sm:max-w-5xl px-5 sm:px-0 m-0 sm:mx-auto">
      {children}
    </main>
  )
}
