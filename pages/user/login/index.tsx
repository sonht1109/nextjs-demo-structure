import React from 'react'
import Link from 'next/link'
import SLink from '../../../src/components/Link'
import SLogin from './style'

export default function UserLogin() {
  return (
    <SLogin>
      UserLogin <br></br>
      <Link href="signup">
        <SLink>Go to signup</SLink>
      </Link><br></br>
      <Link href="/expert/login">
        <SLink>Go to expert login</SLink>
      </Link>
    </SLogin>
  )
}
