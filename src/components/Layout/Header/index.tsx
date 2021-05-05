import React from 'react'
import SHeader from './style'

export default function Header() {
  return (
    <SHeader>
      <div className="logo">
        <img src="/images/vercel.svg" alt="logo" />
      </div>
      <div className="menu">
        <span>Introduce</span>
        <span>Contact</span>
        <span>Join</span>
      </div>
    </SHeader>
  )
}
