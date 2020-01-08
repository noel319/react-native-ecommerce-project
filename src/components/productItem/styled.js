import styled from 'styled-components/native'

import { TextSmallRegular, TextSmallMedium } from '../../styles/typography'

export const ProductItemTouch = styled.TouchableOpacity`
  width: ${props => {
    console.log(props.width)
    return `${props.width}px`
  }};
  min-height: 222px;
  margin: ${props => props.theme.metrics.spacing(0.5)};
  background-color: ${props => props.theme.WHITE};
  padding: ${props => props.theme.metrics.spacing()};
  align-items: center;
  justify-content: space-around;
`

export const Image = styled.Image`
  width: 108px;
  height: 134px;
`

export const Title = styled.Text`
  ${TextSmallRegular}
  padding-top: ${props => props.theme.metrics.spacing()};
`

export const Price = styled.Text`
  color: ${props => props.theme.GREEN};
  align-self: flex-end;
  ${TextSmallMedium};
`
