import { zinc } from 'tailwindcss/colors'

export function DotsTree() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 32 32">
      <path
        fill={zinc[700]}
        d="M16 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM24 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 17.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  )
}
