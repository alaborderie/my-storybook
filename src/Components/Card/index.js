import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  position: relative;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.30);

  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.60);
  }
`

const Card = ({ children }) => (
  <CardContainer>
    {children}
  </CardContainer>
)

export default Card
