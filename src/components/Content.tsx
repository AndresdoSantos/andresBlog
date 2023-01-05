import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Content({ children }: Props) {
  return <main className="max-w-5xl px-10 sm:px-0 sm:mx-auto">{children}</main>
}
