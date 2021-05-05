import React from 'react'
import Link from 'next/link'
import SLink from '../../../src/components/Link'
import SSignup from './style'

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
