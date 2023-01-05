import React from 'react'
import { zinc } from 'tailwindcss/colors'

export function X() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 32 32">
      <path
        fill={zinc[700]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25 7L7 25M25 25L7 7"
      ></path>
    </svg>
  )
}
