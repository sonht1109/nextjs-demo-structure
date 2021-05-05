import React from 'react'
import Link from 'next/link'
import SLink from '../../../src/components/Link'
import SLogin from './style'

export default function ExpertLogin() {
  return (
    <SLogin>
      ExpertLogin <br></br>
      <Link href="signup">
        <SLink>Go to signup</SLink>
      </Link><br></br>
      <Link href="/user/login">
        <SLink>Go to user login</SLink>
      </Link><br></br>
    </SLogin>
  )
}
