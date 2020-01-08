import styled from 'styled-components/native'

export const ProductImage = styled.View`
  padding: ${props => props.theme.metrics.spacing(3)};
  background-color: ${props => props.theme.WHITE};
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 172px;
  height: 212px;
`
