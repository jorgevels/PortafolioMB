/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  color: #2a3439;
  font-weight: 300;
  margin: 0.5em 0 1.2em 0;
`

const SpanStyled = ({ children }) => <StyledSpan>{children}</StyledSpan>

export default SpanStyled
