import React from 'react'
import Link from 'next/link'
import SLink from '../../src/components/Link'
import SNotFound from './store/style'

export default function NotFound() {
  return (
    <SNotFound>
      <img src="/images/vercel.svg" alt="" />
      <Link href="/">
        <SLink>Go back home</SLink>
      </Link>
    </SNotFound>
  )
}
