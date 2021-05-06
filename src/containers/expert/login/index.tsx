import React from 'react'
import Link from 'next/link'
import SLogin from './store/style'
import SLink from '../../../components/Link'

export default function ExpertLogin() {
  return (
    <SLogin>
      Expert Login <br></br>
      <Link href="signup">
        <SLink>Go to signup</SLink>
      </Link><br></br>
      <Link href="/user/login">
        <SLink>Go to user login</SLink>
      </Link><br></br>
    </SLogin>
  )
}
