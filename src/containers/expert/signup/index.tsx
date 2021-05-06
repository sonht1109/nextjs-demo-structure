import React from 'react'
import Link from 'next/link'
import SSignup from './store/style'
import SLink from '../../../components/Link'

export default function ExpertSignup() {
  return (
    <SSignup>
      Expert Signup <br></br>
      <Link href="login">
        <SLink>Back to login</SLink>
      </Link>
    </SSignup>
  )
}
