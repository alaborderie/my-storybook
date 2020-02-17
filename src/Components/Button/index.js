import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  background-color: #38EFEF;
  outline: none;

  &:hover {
    box-shadow: 0 0 2px #38EBEB;
  }
`

const Button = ({ children, type, onClick }) => (
  <ButtonContainer
    onClick={onClick}
  >
    {children}
  </ButtonContainer>
)

Button.defaultProps = {
  onClick: () => null
}

export default Button
