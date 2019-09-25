import React from 'react'
import styled from 'styled-components'

export default function Input(props) {
  return(
    <InputStyle >
      {props.children}
    </InputStyle>
  )
}

const InputStyle = styled.input`
  background:#000;
`