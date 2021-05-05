import React from 'react'
import Link from 'next/link'
import SLink from '../../../components/Link'
import SSignup from './style'

export default function UserSignup() {
  return (
    <SSignup>
      UserSignup <br></br>
      <Link href="login">
        <SLink>Back to login</SLink>
      </Link>
    </SSignup>
  )
}
