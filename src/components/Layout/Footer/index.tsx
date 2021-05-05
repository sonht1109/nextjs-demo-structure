import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <SFooter>
      <p>No Copyright @ 05/05/2021</p>
    </SFooter>
  )
}

const SFooter = styled.div`
  height: 40px;
  background-color: #e3e3e3;
  p{
    margin: 0;
    text-align: center;
  }
`