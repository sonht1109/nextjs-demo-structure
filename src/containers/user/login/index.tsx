import React from 'react'
import Link from 'next/link'
import SLogin from './store/style'
import SLink from '../../../components/Link'

export default function UserLogin() {
  return (
    <SLogin>
      User Login <br></br>
      <Link href="signup">
        <SLink>Go to signup</SLink>
      </Link><br></br>
      <Link href="/expert/login">
        <SLink>Go to expert login</SLink>
      </Link>
    </SLogin>
  )
}
