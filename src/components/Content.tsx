import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Content({ children }: Props) {
  return <main className="max-w-5xl mx-auto">{children}</main>
}
