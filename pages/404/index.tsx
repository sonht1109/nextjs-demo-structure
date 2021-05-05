import React from 'react'
import Link from 'next/link'
import SLink from '../../components/Link'
import SNotFound from './style'

export default function NotFound() {
  return (
    <SNotFound>
      <h2>Oops</h2>
      <Link href="/">
        <SLink>Go back home</SLink>
      </Link>
    </SNotFound>
  )
}
